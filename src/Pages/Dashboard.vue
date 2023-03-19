<template>
  <DashboardLayout>
    <template v-slot:dashboard-contents>
      <div>
        <h1>This is the dashboard page</h1>
        <p>Hi {{ user.displayName }}</p>
        <p>Hi {{ user.email }}</p>
        
        <WhiteButtonVue
          class="h-11 w360 flex items-center justify-center gap-3 bg-red-50 text-red-500"
          @click="SignOut"
        >
          Sign out
        </WhiteButtonVue>
      </div>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import WhiteButtonVue from "../components/WhiteButton.vue";
import { useRouter } from "vue-router";
import { signOut, auth } from "../Config/firebase.js";
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useStore } from "vuex";
import { mapState } from "vuex";


export default {
  components: {
    DashboardLayout,
    WhiteButtonVue,
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
        // const userId = store.state.user.uid;
        // await lastLogout(userId);
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
  computed: {
    ...mapState(["user"]),
  },
 
  
};
</script>


