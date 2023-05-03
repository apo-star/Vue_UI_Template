<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  onAuthStateChanged,
  auth,
  createUserProfileDocument,
} from "@/Config/firebase.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  updateDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import devAvatar from "./assets/dashboardIcons/avatar-default.png";



export default{
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
        //go to dashboard if user is in login and signup page
        if (router.currentRoute.value.path === "/login") {
          router.push({ path: "/dashboard/overview" });
        }
        if (router.currentRoute.value.path === "/signup") {
          router.push({ path: "/dashboard/overview" });
        }
         //router.push({ path: "/dashboard/overview" });
        store.commit("SET_USER", snapShot.data());
        store.commit("SET_USER_PHOTO_URL", snapShot.data().photoURL || devAvatar);
        localStorage.setItem("user", JSON.stringify(snapShot.data()));
        //console.log(snapShot.data());

        // Fetch all users from Firestore
        const usersRef = collection(db, "users");
        const usersSnapshot = await getDocs(usersRef);

        const users = [];
        usersSnapshot.forEach((doc) => {
          users.push({
            id: doc.id,
            ...doc.data(),
            photoURL: doc.data().photoURL || devAvatar,
          });
        });

        updateDoc(userRef, { lastSeen: serverTimestamp() });

        updateDoc(userRef, {
          lastLogin: serverTimestamp(),
        });

        //console.log(users);
        store.commit("SET_USERS", users); // Save users to Vuex store
      } else {
        const userRef = db.doc(`users/${store.getters.currentUser.id}`);
        updateDoc(userRef, { lastSeen: serverTimestamp() });
        // router.push({ path: "/login" });
        store.commit("SET_USER", null);
        store.commit("SET_USERS", []);
        localStorage.removeItem("user");
        // removeCookie(cookiesKey.user);
      }
    });

    // Function to update users in Vuex store
    const updateUsers = (docs) => {
      const updatedUsers = [];
      docs.forEach((doc) => {
        updatedUsers.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      store.commit("SET_USERS", updatedUsers);
    };

    // Schedule a task to update users every 30 seconds
    setInterval(() => {
      const usersRef = collection(db, "users");
      onSnapshot(usersRef, (snapshot) => {
        updateUsers(snapshot.docs);
      });
    }, 4000);

  

    return { slots };
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
