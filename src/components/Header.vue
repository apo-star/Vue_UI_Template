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
      <button
        v-if="isLoggedIn"
        class="h-11 w-20 rounded-lg font-semibold text-base text-gray-600"
      >
        <RouterLink to="/login">Login</RouterLink>
      </button>
      <RouterLink to="/signup" v-if="isLoggedIn">
        <PurpleButton class="h-11 w-24 r"> Sign Up </PurpleButton>
      </RouterLink>
      <div v-if="!isLoggedIn" class="relative">
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
            class="absolute w-60 bg-white border-gray-200 top-16 right-0 rounded-lg border shadow-lg"
            :class="{ hidden: !showDropdown[2] }"
            v-if="!isLoggedIn"
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
                  {{ user.displayName }}
                </p>
                <p class="text-gray-600 text-xs">{{ user.email }}</p>
              </div>
            </div>
            <button
              class="w-full flex gap-3 pl-4 py-3 border-b-2 border-gray-50 items-center"
              @click="SignOut"
            >
              <img
                src="@/assets/dashboardIcons/logout.svg"
                class="h-3.5 w-3.5"
                alt="logout"
              />
              <p class="text-gray-700 font-medium text-sm">Logout</p>
            </button>
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
import { useRouter } from "vue-router";
import { signOut, auth } from "../Config/firebase.js";
import {
  getFirestore,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useStore } from "vuex";
import { mapState } from "vuex";

export default {
  name: "Header",
  components: {
    PurpleButton,
    WhiteButton,
  },
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
      showDropdown: [false, false],
    };
  },
  computed: {
    displayPhotoURL() {
      return this.user.photoURL
        ? this.user.photoURL
        : "./src/assets/dashboardIcons/avatar-default.svg";
    },
    isLoggedIn() {
      this.$store.getters.isLoggedIn;
      console.log(this.user);
    },
    ...mapState(["user"]),
  },

  methods: {
    toggleDropdown(index) {
      this.showDropdown[index] = !this.showDropdown[index];
    },
  },
};
</script>
