<template>
  <div class="mt-16" v-if="loggedInUser">
    <div class="" v-if="routeUser.username === loggedInUser.username">
      <router-link to="/settings/profile">
        <PurpleButton class="px-4 h-10 text-sm font-semibold">
          Edit profile
        </PurpleButton>
      </router-link>
    </div>
    <div class="flex gap-5" v-else>
      <router-link
        :to="{
          name: 'ChatRoom',
          params: { idone: loggedInUser.id, idtwo: routeUser.id },
        }"
      >
        <WhiteButton class="px-4 h-10 text-sm font-semibold">
          Message
        </WhiteButton>
      </router-link>
      <PurpleButton
        class="w-28 h-10 text-sm font-semibold flex items-center gap-3 justify-center"
        v-if="!isFollowing"
        @click="followUser"
      >
        <img
          src="../../assets/profileIcons/bullseye.svg"
          alt="bullseye"
          class="h-4 w-4"
        />
        Follow
      </PurpleButton>
      <PurpleButton
        class="w-28 h-10 text-sm font-semibold flex items-center gap-2 justify-center"
        :style="
          buttonHover
            ? 'border: 1px solid #EF4444; background-color: #EF4444'
            : ''
        "
        v-else
        @click="followUser"
        @mouseover="buttonHover = true"
        @mouseleave="buttonHover = false"
      >
        <img
          src="../../assets/profileIcons/direct-hit.svg"
          alt="direct-hit"
          class="h-4 w-4"
          v-if="!buttonHover"
        />
        <img
          src="../../assets/profileIcons/broken-arrow.svg"
          alt="broken-arrow"
          class="h-4 w-4"
          v-else
        />
        <span>{{ buttonHover ? "Unfollow" : "Following" }}</span>
      </PurpleButton>
    </div>
  </div>
  <div class="mt-16 flex gap-5" v-else>
    <WhiteButton class="px-4 h-10 text-sm font-semibold"> Message </WhiteButton>
    <PurpleButton class="px-4 h-10 text-sm font-semibold">
      Follow
    </PurpleButton>
  </div>
</template>

<script>
import PurpleButton from "../PurpleButton.vue";
import WhiteButton from "../WhiteButton.vue";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Config/firebase.js";
import { mapState } from "vuex";
export default {
  name: "FollowButtons",
  components: {
    PurpleButton,
    WhiteButton,
  },
  props: {
    loggedInUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      username: this.$route.params.username,
      //isFollowing: false,
      buttonHover: false,
    };
  },
  watch: {
    $route: {
      immediate: true, // call the handler immediately on initial mount
      handler(newVal, oldVal) {
        this.username = newVal.params.username;
      },
    },
  },
  computed: {
    ...mapState(["users"]),
    //check if username matches any user in the vuex store
    routeUser() {
      return this.users.find((user) => user.username === this.username);
    },
    isFollowing() {
      // Check if the loggedInUser is following the routeUser
      return this.loggedInUser.following.includes(this.routeUser.id);
    },
  },

  methods: {
    async followUser() {
      // Check if the loggedInUser is already following the routeUser
      if (this.loggedInUser.following.includes(this.routeUser.id)) {
        // The loggedInUser is already following the routeUser, so unfollow them
        this.loggedInUser.following = this.loggedInUser.following.filter(
          (user) => user !== this.routeUser.id
        );
        this.routeUser.followers = this.routeUser.followers.filter(
          (user) => user !== this.loggedInUser.id
        );
      } else {
        // The loggedInUser is not following the routeUser, so follow them
        this.loggedInUser.following.push(this.routeUser.id);
        this.routeUser.followers.push(this.loggedInUser.id);
        this.routeUser = { ...this.routeUser };
      }

      // Update the Firestore database
      await updateDoc(doc(db, "users", this.routeUser.id), {
        followers: this.routeUser.followers,
      });
      await updateDoc(doc(db, "users", this.loggedInUser.id), {
        following: this.loggedInUser.following,
      });
    },
  },
};
</script>

<style scoped></style>
