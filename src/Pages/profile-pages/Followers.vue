<template>
  <div class="bg-gray-50 w-full">
    <div class="bg-white w-6/12 p-4 shadow-md rounded-lg mx-auto">
      <div v-if="!routeUser">
        <h1>Loading...</h1>
      </div>
      <div v-else>
        <ul class="flex flex-col gap-3" v-if="routeUserFollowers.length > 0">
          <li
            v-for="user in routeUserFollowers"
            :key="user.id"
            class="flex justify-between"
          >
            <RouterLink
              :to="`/${user.username}`"
              class="flex items-center gap-4 transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded-md px-4"
            >
              <img
                :src="
                  user.photoURL
                    ? user.photoURL
                    : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'
                "
                alt="avatar"
                class="w-12 h-12 rounded-full"
              />
              <div class="flex flex-col">
                <h1 class="text-gray-900 font-semibold text-base">
                  {{ user.displayName }}
                </h1>
                <p class="text-gray-600 text-sm">@{{ user.username }}</p>
              </div>
            </RouterLink>
            <div>
              <div v-if="loggedInUser">
                <div v-if="user.id === loggedInUser.id">
                  <!-- <router-link to="/settings/profile">
                    <PurpleButton class="px-4 h-10 text-sm font-semibold">
                      Edit profile
                    </PurpleButton>
                  </router-link> -->
                </div>
                <div v-else-if="user.followers.includes(loggedInUser.id)">
                  <PurpleButton
                    class="w-28 h-10 text-sm font-semibold flex items-center gap-2 justify-center hh"
                    @click="followUser(user)"
                  >
                    <img
                      src="../../assets/profileIcons/direct-hit.svg"
                      alt="direct-hit"
                      class="h-4 w-4"
                    />

                    <span>Following</span>
                  </PurpleButton>
                </div>
                <div v-else>
                  <WhiteButton
                    class="w-28 h-10 text-sm font-semibold flex items-center gap-3 justify-center text-purple-600 border border-purple-600"
                    @click="followUser(user)"
                  >
                    <img
                      src="../../assets/profileIcons/bullseye-purple.svg"
                      alt="bullseye"
                      class="h-4 w-4"
                    />
                    Follow
                  </WhiteButton>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div v-else class="text-gray-500 text-sm">
          <p v-if="routeUser.id === loggedInUser.id">
            You don't have any followers yet
          </p>
          <p v-else>This user doesn't have any followers yet</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PurpleButton from "../../components/PurpleButton.vue";
import { RouterLink } from "vue-router";
import WhiteButton from "../../components/WhiteButton.vue";
import { db } from "../../Config/firebase.js";
import { doc, updateDoc } from "firebase/firestore";
export default {
  name: "Followers",
  components: { PurpleButton, RouterLink, WhiteButton },
  data() {
    return {
      username: this.$route.params.username,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(newVal, oldVal) {
        this.username = newVal.params.username;
      },
    },
  },
  computed: {
    ...mapState(["users"]),
    routeUser() {
      return this.users.find((user) => user.username === this.username);
    },
    loggedInUser() {
      if (this.$store.state.user) {
        return this.$store.state.user;
      } else {
        return null;
      }
    },
    routeUserFollowers() {
      if (!this.routeUser) return [];
      return this.users.filter((user) =>
        this.routeUser.followers.includes(user.id)
      );
    },
  },
  methods: {
    async followUser(user) {
      // Check if the loggedInUser is already following the given user
      if (this.loggedInUser.following.includes(user.id)) {
        // The loggedInUser is already following the given user, so unfollow them
        this.loggedInUser.following = this.loggedInUser.following.filter(
          (userId) => userId !== user.id
        );
        user.followers = user.followers.filter(
          (userId) => userId !== this.loggedInUser.id
        );
      } else {
        // The loggedInUser is not following the given user, so follow them
        this.loggedInUser.following.push(user.id);
        user.followers.push(this.loggedInUser.id);
        user = { ...user };
      }

      // Update the Firestore database
      await updateDoc(doc(db, "users", user.id), {
        followers: user.followers,
      });
      await updateDoc(doc(db, "users", this.loggedInUser.id), {
        following: this.loggedInUser.following,
      });
    },
  },
};
</script>

<!-- <style scoped>
.hh {
  border: 1px solid #EF4444;
  background-color: #EF4444;
}

.hh:hover {
  border: 1px solid #fff;
  background-color: #fff;
}
</style> -->
```
