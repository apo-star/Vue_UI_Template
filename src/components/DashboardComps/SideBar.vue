<template>
  <div
    class="flex h-screen"
    @mouseenter="toggleSubNav"
    @mouseleave="toggleSubNav"
  >
    <div
      class="px-4 pt-8 pb-6 bg-white flex flex-col items-center justify-between border-r border-gray-200"
    >
      <div class="flex flex-col items-center gap-6">
        <img
          src="@/assets/logo.png"
          alt="logo"
          height="32"
          width="32"
          class="rounded-lg"
        />
        <div class="flex flex-col gap-2 items-center">
          <router-link
            to="/"
            active-class="bg-gray-50"
            class="p-3.5 hover:bg-gray-50 rounded-md transition duration-500 ease-in-out"
          >
            <img
              src="@/assets/dashboardIcons/home-line.svg"
              alt="logo"
              height="20"
              width="20"
              class="rounded-lg"
            />
          </router-link>
          <router-link
            to="/dashboard/overview"
            active-class="bg-gray-50"
            class="p-3.5 hover:bg-gray-50 rounded-md transition duration-500 ease-in-out"
          >
            <img
              src="@/assets/dashboardIcons/bar-chart-square.svg"
              alt="logo"
              height="20"
              width="20"
              class="rounded-lg"
            />
          </router-link>
        </div>
      </div>
      <div class="flex flex-col gap-9 items-center">
        <router-link
          to="/dashboard/overview"
          active-class="bg-gray-50"
          class="p-3.5 hover:bg-gray-50 rounded-md transition duration-500 ease-in-out"
        >
          <img
            src="@/assets/dashboardIcons/settings.svg"
            alt="settings"
            height="20"
            width="20"
            class="rounded-lg"
          />
        </router-link>
        <div class="relative w-max h-max">
          <img
            alt="avatar"
            :src="displayPhotoURL"
            class="h-12 w-12 rounded-full hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-between border-r border-gray-200"
      :class="{ hidden: !showSubNav }"
    >
      <div class="px-4 pt-9 pb-6 flex flex-col justify-between h-full">
        <div class="flex flex-col gap-4">
          <h3 class="text-left font-medium text-base text-gray-900">
            Dashboard
          </h3>
          <div class="w-60 flex flex-col items-center gap-1">
            <router-link
              to="/dashboard/overview"
              active-class="bg-gray-50"
              class="flex gap-3.5 w-full h-10 items-center hover:bg-gray-50 rounded-md transition duration-500 ease-in-out py-3 pl-3.5"
            >
              <img
                src="@/assets/dashboardIcons/activity.svg"
                alt="logo"
                height="20"
                width="20"
                class="rounded-lg"
              />
              <h4 class="font-semibold text-base text-gray-900">Overiew</h4>
            </router-link>
            <router-link
              to="/"
              active-class="bg-gray-50"
              class="flex gap-3.5 w-full h-10 items-center hover:bg-gray-50 rounded-md transition duration-500 ease-in-out py-3 pl-3.5 pr-3 justify-between"
            >
              <div class="flex gap-3.5">
                <img
                  src="@/assets/dashboardIcons/notification-box.svg"
                  alt="logo"
                  height="20"
                  width="20"
                  class="rounded-lg"
                />
                <h4 class="font-semibold text-base text-gray-900">
                  Notification
                </h4>
              </div>
              <p
                class="bg-gray-100 px-2 py-0.5 rounded-2xl text-gray-600 font-medium text-xs"
              >
                10
              </p>
            </router-link>
            <router-link
              to="/"
              active-class="bg-gray-50"
              class="flex gap-3.5 w-full h-10 items-center hover:bg-gray-50 rounded-md transition duration-500 ease-in-out py-3 pl-3.5"
            >
              <img
                src="@/assets/dashboardIcons/bar-line-chart.svg"
                alt="logo"
                height="20"
                width="20"
                class="rounded-lg"
              />
              <h4 class="font-semibold text-base text-gray-900">Activity</h4>
            </router-link>
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            <h3 class="text-gray-900 text-sm font-medium">
              {{ user.displayName }}
            </h3>
            <p class="text-gray-600 text-xs font-normal">
              {{ user.email }}
            </p>
          </div>
          <button  @click="SignOut">
            <img
              src="@/assets/dashboardIcons/logout.svg"
              class="h-4 w-4"
              alt="logout"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { useRouter } from "vue-router";
import { signOut, auth } from "@/Config/firebase.js";
import {
  getFirestore,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useStore } from "vuex";

export default {
  name: "Sidebar",
  components: {},
  setup() {
    const router = useRouter();
    const store = useStore();

    const lastLogout = async (userId) => {
      const db = getFirestore();
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        last_logout: serverTimestamp(),
      });
    };

    const SignOut = async () => {
      try {
        await signOut(auth);
        store.commit("SET_USER", null);
        router.push({ path: "/login" });
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      SignOut,
      lastLogout,
    };
  },
  data() {
    return {
      showSubNav: false,
    };
  },
  computed: {
    ...mapState(["user"]),
    displayPhotoURL() {
      return this.user.photoURL
        ? this.user.photoURL
        : "/src/assets/dashboardIcons/avatar-default.svg";
    },
  },
  methods: {
    toggleSubNav() {
      this.showSubNav = !this.showSubNav;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #666;
}
</style>
