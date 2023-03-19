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
        // const token = await userAuth.getIdToken();
        // setCookie(cookiesKey.user, token);
        if (!userRef) return;

        // get cart item
        // const cartRef = collection(db, "users", `${userRef.id}/cart`);
        // const cartSnapshot = await getDocs(cartRef);
        // const cartItems = cartSnapshot.docs.map((doc) => {
        //   return {
        //     quantity: doc.data().quantity,
        //     ...doc.data().product,
        //   };
        // });

        const snapShot = await getDoc(userRef);
        if (!snapShot.exists()) return;
         router.push({ path: "/dashboard" });
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
