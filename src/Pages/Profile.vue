<template>
  <DashboardLayout>
    <template v-slot:dashboard-contents>
      <div v-if="loading" class="text-center">
        <p>Loading...</p>
      </div>
      <div class="flex flex-row justify-between" v-else-if="user">
        <h1>
          {{ username }}
        </h1>

        <h2>
          {{ user.email }}
        </h2>
      </div>
      <div class="flex flex-row justify-between" v-else>
        <h1>{{ username }} not found or account has been deleted</h1>
      </div>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../Layouts/DashboardLayout.vue";
import { mapState } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { db } from "../Config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default {
  name: "Profile",
  components: {
    DashboardLayout,
  },

  setup() {
    const router = useRouter();
    const username = ref(router.currentRoute.value.params.username);
    const user = ref({});
    const loading = ref(true);

    const fetchUser = async () => {
      const useRef = collection(db, "users");
      const q = query(useRef, where("username", "==", username.value));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        user.value = null;
      } else {
        // display user's profile information
        user.value = querySnapshot.docs[0].data();
      }
      loading.value = false;
    };

    fetchUser();

    return {
      username,
      user,
      loading,
    };
  },
};
</script>
