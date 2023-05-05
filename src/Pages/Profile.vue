<template>
  <DashboardLayout>
    <template v-slot:dashboard-contents>
      <div class="relative">
        <div
          class="bg-gradient-to-tr from-pink-100 via-orange-200 to-purple-400 w-full absolute top-0 z-10"
          :style="loggedInUser ? 'height: 240px' : 'height: 300px'"
        ></div>
        <div v-if="!loggedInUser">
          <Header />
        </div>
        <div v-if="loading" class="text-center pt-80">
          <p>Loading...</p>
        </div>
        <div
          class="w-full relative min-h-screen bg-gray-50"
          v-else-if="routeUser"
          :style="loggedInUser ? 'padding-top: 160px' : 'padding-top: 220px'"
        >
          <div class="flex justify-between px-16 w-full">
            <div
              class="flex flex-col gap-10 h-max z-20"
              style="position: sticky; top: 0"
            >
              <div class="flex flex-row gap-40 pt-10">
                <div class="flex gap-8 relative">
                  <img
                    :src="
                      routeUser.photoURL
                        ? routeUser.photoURL
                        : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'
                    "
                    alt="avatar"
                    class="h-40 w-40 rounded-full border-4 border-white shadow-lg bg-white"
                  />
                  <img
                    src="../assets/dashboardIcons/verified-tick.svg"
                    alt="verified"
                    class="h-8 w-8 absolute z-30"
                    style="top: 120px; left: 120px"
                  />
                  <div class="flex flex-col gap-3 mt-16">
                    <div>
                      <h1 class="text-3xl font-semibold text-gray-900 w-max">
                        {{ routeUser.displayName }}
                      </h1>
                      <p class="text-gray-600 text-base font-normal">
                        @{{ username }}
                      </p>
                    </div>

                    <div class="flex gap-4">
                      <p class="text-gray-600 text-base font-semibold">
                        {{ routeUser.followers.length }} followers
                      </p>
                      <p class="text-gray-600 text-base font-semibold">
                        {{ routeUser.following.length }} following
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-16" v-if="loggedInUser">
                  <div
                    class=""
                    v-if="routeUser.username === loggedInUser.username"
                  >
                    <PurpleButton class="px-4 h-10 text-sm font-semibold">
                      Edit profile
                    </PurpleButton>
                  </div>
                  <div class="flex gap-5" v-else>
                    <WhiteButton class="px-4 h-10 text-sm font-semibold">
                      Message
                    </WhiteButton>
                    <PurpleButton
                      class="px-4 h-10 text-sm font-semibold"
                      v-if="!isFollowing"
                      @click="followUser"
                    >
                      Follow
                    </PurpleButton>
                    <PurpleButton
                      class="px-4 h-10 text-sm font-semibold"
                      v-else
                      @click="followUser"
                    >
                      Unfollow
                    </PurpleButton>
                  </div>
                </div>
                <div class="mt-16 flex gap-5" v-else>
                  <WhiteButton class="px-4 h-10 text-sm font-semibold">
                    Message
                  </WhiteButton>
                  <PurpleButton class="px-4 h-10 text-sm font-semibold">
                    Follow
                  </PurpleButton>
                </div>
              </div>
              <div class="">
                <div class="flex flex-col gap-4">
                  <p
                    class="text-gray-700 text-base font-normal w-80"
                    v-if="routeUser.bio"
                  >
                    {{ routeUser.bio }}
                  </p>
                  <p class="text-gray-700 text-base font-normal w-80" v-else>
                    No bio
                  </p>
                  <div class="flex gap-4">
                    <a
                      v-if="routeUser.website"
                      :href="routeUser.website"
                      target="_blank"
                      class="flex gap-2 items-center"
                    >
                      <img
                        src="../assets/profileIcons/web.svg"
                        alt="website"
                        class="h-4 w-4"
                      />
                      <p
                        class="text-blue-400 text-sm font-normal hover:underline hover:text-blue-500 transition duration-500 ease-in-out"
                      >
                        {{ routeUser.website.split("/")[2] }}
                      </p>
                    </a>
                    <div
                      v-if="routeUser.location"
                      class="flex gap-2 items-center"
                    >
                      <img
                        src="../assets/profileIcons/location.svg"
                        alt="location"
                        class="h-4 w-4"
                      />
                      <p class="text-gray-600 text-sm font-normal">
                        {{ routeUser.location }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="grid grid-cols-2 grid-flow-row gap-2 gap-x-3 w-max"
                    v-if="routeUser.socials"
                  >
                    <a
                      v-if="routeUser.socials.twitter"
                      :href="routeUser.socials.twitter"
                      target="_blank"
                      class="flex gap-2 items-center"
                    >
                      <img
                        src="../assets/profileIcons/twitter.svg"
                        alt="twitter"
                        class="h-4 w-4"
                      />
                      <!-- get username -->
                      <p class="text-gray-600 text-sm font-normal">
                        {{ routeUser.socials.twitter.split("/")[3] }}
                      </p>
                    </a>
                    <a
                      v-if="routeUser.socials.facebook"
                      :href="routeUser.socials.facebook"
                      target="_blank"
                      class="flex gap-2 items-center"
                    >
                      <img
                        src="../assets/profileIcons/facebook.svg"
                        alt="facebook"
                        class="h-5 w-5"
                      />
                      <!-- get username -->
                      <p class="text-gray-600 text-sm font-normal">
                        {{ routeUser.socials.facebook.split("/")[3] }}
                      </p>
                    </a>

                    <a
                      v-if="routeUser.socials.linkedin"
                      :href="routeUser.socials.linkedin"
                      target="_blank"
                      class="flex gap-2 items-center"
                    >
                      <img
                        src="../assets/profileIcons/linkedin.svg"
                        alt="linkedin"
                        class="h-4 w-4"
                      />
                      <!-- get username -->
                      <p class="text-gray-600 text-sm font-normal">
                        {{ routeUser.socials.linkedin.split("/")[4] }}
                      </p>
                    </a>
                    <a
                      v-if="routeUser.socials.instagram"
                      :href="routeUser.socials.instagram"
                      target="_blank"
                      class="flex gap-2 items-center"
                    >
                      <img
                        src="../assets/profileIcons/instagram.svg"
                        alt="instagram"
                        class="h-4 w-4"
                      />
                      <!-- get username -->
                      <p class="text-gray-600 text-sm font-normal">
                        {{ routeUser.socials.instagram.split("/")[3] }}
                      </p>
                    </a>
                    <a
                      v-if="routeUser.socials.github"
                      :href="routeUser.socials.github"
                      target="_blank"
                      class="flex gap-2 items-center"
                    >
                      <img
                        src="../assets/profileIcons/github.svg"
                        alt="github"
                        class="h-4 w-4"
                      />
                      <!-- get username -->
                      <p class="text-gray-600 text-sm font-normal">
                        {{ routeUser.socials.github.split("/")[3] }}
                      </p>
                    </a>
                    <a
                      v-if="routeUser.socials.youtube"
                      :href="routeUser.socials.youtube"
                      target="_blank"
                      class="flex gap-2 items-center"
                    >
                      <img
                        src="../assets/profileIcons/youtube.svg"
                        alt="youtube"
                        class="h-4 w-4"
                      />
                      <!-- get username -->
                      <p class="text-gray-600 text-sm font-normal">
                        {{ routeUser.socials.youtube.split("/")[3] }}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-5/12 mt-16 pt-10 flex flex-col gap-5">
              <div class="bg-white w-full py-2 pl-2 shadow rounded-md">
                <h3 class="text-gray-900 font-semibold text-lg">Posts</h3>
              </div>
              <h1 class="text-gray-300 text-7xl text-center italic mt-40">
                No posts yet
              </h1>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between pt-80" v-else>
          <h1>{{ username }} not found or account has been deleted</h1>
        </div>
      </div>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../Layouts/DashboardLayout.vue";
import { mapState, useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { db } from "../Config/firebase.js";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import PurpleButton from "../components/PurpleButton.vue";
import WhiteButton from "../components/WhiteButton.vue";
import Header from "../components/Header.vue";

export default {
  name: "Profile",
  components: {
    DashboardLayout,
    PurpleButton,
    WhiteButton,
    Header,
  },

  data() {
    return {
      username: this.$route.params.username,
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
    loggedInUser() {
      if (this.$store.state.user) {
        return this.$store.state.user;
      } else {
        return null;
      }
    },
    isFollowing() {
      // Check if the loggedInUser is following the routeUser
      return this.loggedInUser.following.includes(this.routeUser.username);
    },
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
      //console.log(this.routeUser);
      //console.log(this.loggedInUser);
    }, 2000);
  },

  methods: {
    async followUser() {
      // Check if the loggedInUser is already following the routeUser
      if (this.loggedInUser.following.includes(this.routeUser.username)) {
        // The loggedInUser is already following the routeUser, so unfollow them
        this.loggedInUser.following = this.loggedInUser.following.filter(
          (user) => user !== this.routeUser.username
        );
        this.routeUser.followers = this.routeUser.followers.filter(
          (user) => user !== this.loggedInUser.username
        );
      } else {
        // The loggedInUser is not following the routeUser, so follow them
        this.loggedInUser.following.push(this.routeUser.username);
        this.routeUser.followers.push(this.loggedInUser.username);
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

  //   setup() {
  //     const router = useRouter();
  //     const username = ref(router.currentRoute.value.params.username);
  //     const user = ref({});
  //     const loading = ref(true);
  //     const store = useStore();

  //     //check if username matches any user in the vuex store

  //     store.state.users.forEach((user) => {
  //       if (user.username === username.value) {
  //         user.value = user;
  //         loading.value = false;
  //       }
  //     });

  //     // const fetchUser = async () => {
  //     //   const useRef = collection(db, "users");
  //     //   const q = query(useRef, where("username", "==", username.value));
  //     //   const querySnapshot = await getDocs(q);
  //     //   if (querySnapshot.empty) {
  //     //     user.value = null;
  //     //   } else {
  //     //     // display user's profile information
  //     //     user.value = querySnapshot.docs[0].data();
  //     //   }
  //     //   loading.value = false;
  //     // };

  //     // fetchUser();

  //     return {
  //       username,
  //       user,
  //       loading,
  //     };
  //},
};
</script>
