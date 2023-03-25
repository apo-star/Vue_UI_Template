<script>
import Header from "./components/Header.vue";

import Footer from "./components/Footer.vue";

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
        // store.dispatch("auth/fetchFromServer", cartItems);
      } else {
        // router.push({ path: "/login" });
        store.commit("SET_USER", null);
        localStorage.removeItem("user");
        // removeCookie(cookiesKey.user);
      }
    });

    return{slots}
  },
};
</script>

<template>
  <!-- <header>
    <Header />

     <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> 
  </header> -->

  <main class="">
    <!-- <TheWelcome /> -->
    <router-view />
  </main>

  <!-- <footer>
     <Footer /> 
  </footer> -->
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
