<template>
  <button
    class="w-full flex gap-3 pl-4 py-3 border-b-2 border-gray-50 items-center hover:bg-gray-50 rounded-md transition duration-500 ease-in-out"
    @click="SignOut"
  >
    <img
      src="@/assets/dashboardIcons/logout.svg"
      class="h-3.5 w-3.5"
      alt="logout"
    />
    <p class="text-gray-700 font-medium text-sm">Logout</p>
  </button>
</template>

<script>
import { useRouter } from "vue-router";
import { signOut, auth } from "../Config/firebase.js";
import {
  getFirestore,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useStore } from "vuex";
export default {
  name: "LogOut",
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
      // Display a confirmation dialog
      const confirmed = window.confirm("Are you sure you want to log out?");
      // Proceed with logout if user confirmed
      if (confirmed) {
        try {
          await signOut(auth);
          //await lastLogout(store.state.user.uid); // Update last logout time
          store.commit("SET_USER", null);
          router.push({ path: "/login" });
        } catch (error) {
          alert(error.message);
        }
      }
    };

    return {
      SignOut,
      lastLogout,
    };
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
