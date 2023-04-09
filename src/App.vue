<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onAuthStateChanged, auth, createUserProfileDocument } from "@/Config/firebase.js";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

export default {
  name: "App",

  setup(props, { slots }) {
    const router = useRouter();
    const store = useStore();
    const db = getFirestore();

    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (!userRef) return;


        const snapShot = await getDoc(userRef);
        if (!snapShot.exists()) return;
         router.push({ path: "/dashboard/overview" });
        store.commit("SET_USER", snapShot.data());
        localStorage.setItem("user", JSON.stringify(snapShot.data()));
       console.log(snapShot.data());

       // Fetch all users from Firestore
       const usersRef = collection(db, "users");
        const usersSnapshot = await getDocs(usersRef);

        const users = [];
        usersSnapshot.forEach((doc) => {
          users.push({
            id: doc.id,
            ...doc.data(),
            password: null,
          });
        });
        console.log(users);
        store.commit("SET_USERS", users); // Save users to Vuex store

      } else {
        // router.push({ path: "/login" });
        store.commit("SET_USER", null);
        store.commit("SET_USERS", []);
        localStorage.removeItem("user");
        // removeCookie(cookiesKey.user);
      }
    });

    return{slots}
  },
};
</script>

<template>

  <main class="">
    <router-view />
  </main>

</template>

<style scoped>
header {
  font-family: "Inter", sans-serif;
}
main {
  font-family: "Inter", sans-serif;
}
footer {
  font-family: "Inter", sans-serif;
}
</style>
