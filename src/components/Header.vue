<template>
  <div
    class="py-5 flex flex-row justify-between items-center px-28 border-b-gray-100 border-b xl:px-10 lg:px-2 md:px-4 md:py-4"
  >
    <div class="flex flex-row justify-between items-center gap-10">
      <div>
        <img src="../assets/untiltlesd.svg" alt="logo" />
      </div>
      <div>
        <ul
          class="flex flex-row justify-between items-center gap-9 font-semibold text-base text-gray-600 md:hidden"
        >
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <a href="" class="flex gap-3 items-center">
              Product
              <span class="lg:hidden">
                <img
                  src="../assets/expand.svg"
                  height="10"
                  width="25"
                  alt="expand"
                />
              </span>
            </a>
          </li>
          <li>
            <a href="" class="flex gap-3 items-center">
              Resources
              <span class="lg:hidden">
                <img
                  src="../assets/expand.svg"
                  height="10"
                  width="25"
                  alt="expand"
                />
              </span>
            </a>
          </li>
          <li>
            <RouterLink to="/pricing">Pricing</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="flex flex-row justify-between items-center gap-3 text-black md:hidden"
    >
      <div v-if="!user">
        <button
          class="h-11 w-20 rounded-lg font-semibold text-base text-gray-600"
        >
          <RouterLink to="/login">Login</RouterLink>
        </button>
        <RouterLink to="/signup">
          <PurpleButton class="h-11 w-24 r"> Sign Up </PurpleButton>
        </RouterLink>
      </div>

      <div class="relative" v-else>
        <div
          class="h-12 w-12 rounded-full bg-gray-50 hover:border-4 cursor-pointer transition duration-500 ease-in-out flex items-center justify-center border-purple-100"
          @click="toggleDropdown(2)"
        >
          <img
            alt="avatar"
            :src="displayPhotoURL"
            class="h-9 w-9 rounded-full"
          />
          <div
            class="absolute w-64 bg-white border-gray-200 top-14 right-0 rounded-lg border shadow-lg"
            :class="{ hidden: !showDropdown[2] }"
          >
            <div class="w-full flex gap-3 pl-4 py-3 border-b-2 border-gray-50">
              <div class="relative w-max h-max">
                <img
                  alt="avatar"
                  :src="displayPhotoURL"
                  class="h-10 w-10 rounded-full"
                />
                <p
                  class="h-3 w-3 absolute bg-green-500 rounded-full border-white border-2 bottom-0 right-0"
                ></p>
              </div>

              <div>
                <p class="font-semibold text-sm text-gray-700">
                  {{ name }}
                </p>
                <p class="text-gray-600 text-xs">
                  {{ user.email }}
                </p>
              </div>
            </div>
            <router-link to="/dashboard/overview" class="w-full flex gap-3 pl-4 py-3 items-center hover:bg-gray-50 rounded-md transition duration-500 ease-in-out">
              <img
                src="../assets/dashboardIcons/user.svg"
                class="h-4 w-4"
                alt=""
              />
              <p class="text-gray-700 text-sm font-medium">View profile</p>
            </router-link>
            <router-link to="/settings/profile" class="w-full flex gap-3 pl-4 py-3 items-center border-b-2 border-gray-50 hover:bg-gray-50 rounded-md transition duration-500 ease-in-out">
              <img
                src="../assets/dashboardIcons/settings.svg"
                class="h-4 w-4"
                alt=""
              />
              <p class="text-gray-700 text-sm font-medium">Settings</p>
            </router-link>
            <LogOut />
          </div>
        </div>
      </div>
    </div>
    <img
      src="../assets/menu-hamburger.svg"
      alt="menu"
      class="hidden md:block"
      height="25"
      width="25"
    />
  </div>
</template>

<style scoped>
div {
  font-family: "Inter", sans-serif;
}
</style>

<script>
import PurpleButton from "./PurpleButton.vue";
import WhiteButton from "./WhiteButton.vue";
import { mapState } from "vuex";
import LogOut from "./LogOut.vue";

export default {
  name: "Header",
  components: {
    PurpleButton,
    WhiteButton,
    LogOut,
  },

  data() {
    return {
      showDropdown: [false, false],
    };
  },
  computed: {
    displayPhotoURL() {
      return this.user.photoURL
        ? this.user.photoURL
        : "./src/assets/dashboardIcons/avatar-default.png";
    },
    name() {
      if (this.user) {
        return this.user.displayName;
      } else {
        return "Unknown User";
      }
    },

    ...mapState(["user", "isLoggedIn"]),
  },

  methods: {
    toggleDropdown(index) {
      this.showDropdown[index] = !this.showDropdown[index];
    },
  },
};
</script>
