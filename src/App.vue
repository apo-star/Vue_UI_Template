<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  onAuthStateChanged,
  auth,
  createUserProfileDocument,
  db,
  sendEmailVerification,
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

export default {
  name: "App",
  data() {
    return {
      showVerifyEmail: false,
    };
  },
  mounted() {
    const usersRef = collection(db, "users");
    getDocs(usersRef).then((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data(),
          photoURL: doc.data().photoURL || devAvatar,
        });
      });
      this.$store.commit("SET_USERS", users);
    });
    const user = auth.currentUser;
    //check if user email is verified
    if (user) {
      if (!user.emailVerified) {
        this.showVerifyEmail = true;
      }
    }
  },

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
          router.push({ path: "/settings/profile" });
        }
        if (router.currentRoute.value.path === "/signup") {
          router.push({ path: "/settings/profile" });
        }
        //router.push({ path: "/dashboard/overview" });
        //add snapshot.data and snapshot.id to vuex store

        const user = { id: snapShot.id, ...snapShot.data() };
        store.commit("SET_USER", user);
        store.commit(
          "SET_USER_PHOTO_URL",
          snapShot.data().photoURL || devAvatar
        );
        localStorage.setItem("user", JSON.stringify(user));
        //console.log(user);
        //console.log(snapShot.id);
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

        // //check if user is verified
        // if (!userAuth.emailVerified) {
        //   this.$store.commit("SET_USER_EMAIL_VERIFIED", false);
        // } else if (userAuth.emailVerified && !user.emailVerified) {
        //   this.$store.commit("SET_USER_EMAIL_VERIFIED", true);
        //   updateDoc(userRef, { emailVerified: true });
        // }

        //console.log(users);
        store.commit("SET_USERS", users); // Save users to Vuex store
      } else {
        const userRef = db.doc(`users/${store.getters.currentUser.id}`);
        updateDoc(userRef, { lastSeen: serverTimestamp() });
        // router.push({ path: "/login" });
        store.commit("SET_USER", null);
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
  //check if user is verified
  watch: {
    $route(to, from) {
      const user = auth.currentUser;
      if (user) {
        if (!user.emailVerified) {
          this.showVerifyEmail = true;
          //console.log(user.emailVerified);
        } else {
          this.showVerifyEmail = false;
         // console.log(user);
        }
      }
    },
  },
  methods: {
    async requestVerificationLink() {
      sendEmailVerification(auth.currentUser, {
        url: "https://pricing-page-fox.netlify.app/settings/profile",
        handleCodeInApp: true,
      })
        .then(() => {
          alert("Verification email sent");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          // ...
        });
    },
  },
};
</script>

<template>
  <p
    class="text-red-600 text-center fixed top-0 z-40 bg-white left-10"
    v-if="showVerifyEmail"

  >
    Please verify your email address. Check your inbox for a verification link.
    Didn't receive an email?
    <button
      class="text-blue-600"
      @click="requestVerificationLink"
    >
      Resend
    </button>
  </p>
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
