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
                      <h1 class="text-3xl font-semibold text-gray-900 w-max ">
                        {{ routeUser.displayName }}
                        <span
                          v-if="routeUser.admin"
                          class="relative"
                          title="Admin"
                        >
                          <img
                            src="../assets/profileIcons/admin-tag.svg"
                            alt="admin"
                            class="h-7 w-7 inline-block"
                            title="Admin"
                          />
                          <p
                            class="absolute top-2.5 left-2 text-sm font-semibold text-white"
                          >
                            A
                          </p>
                        </span>
                      </h1>
                      <p class="text-gray-600 text-base font-normal">
                        @{{ username }}
                      </p>
                    </div>

                    <div class="flex gap-4">
                      <router-link
                        :to="`/${username}/followers`"
                        class="text-gray-600 text-base font-semibold"
                      >
                        {{ routeUser.followers.length }} followers
                      </router-link>
                      <router-link
                        :to="`/${username}/following`"
                        class="text-gray-600 text-base font-semibold"
                      >
                        {{ routeUser.following.length }} following
                      </router-link>
                    </div>
                  </div>
                </div>
                <FollowButtons :loggedInUser="loggedInUser" />
              </div>
              <div class="">
                <Socials :routeUser="routeUser" />
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
import PurpleButton from "../components/PurpleButton.vue";
import WhiteButton from "../components/WhiteButton.vue";
import Header from "../components/Header.vue";
import FollowButtons from "../components/ProfileComps/FollowButtons.vue";
import Socials from "../components/ProfileComps/Socials.vue";

export default {
  name: "Profile",
  components: {
    DashboardLayout,
    FollowButtons,
    Socials,
    PurpleButton,
    WhiteButton,
    Header,
  },

  data() {
    return {
      username: this.$route.params.username,
      loading: true,
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
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
      //console.log(this.routeUser);
      //console.log(this.loggedInUser);
    }, 2000);
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
