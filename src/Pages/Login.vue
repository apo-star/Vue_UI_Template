<template>
  <AuthLayout>
    <template v-slot:auth-contents>
      <form
        @submit.prevent="onSubmit"
        class="pt-24 h-screen flex flex-col items-center w-full"
      >
        <img
          src="../assets/logo.png"
          alt="logo"
          height="32"
          width="32"
          class="rounded-lg"
        />
        <h3 class="font-semibold text-3xl text-gray-900 mt-6 mb-3">
          Log in to your account
        </h3>
        <p class="text-base font-normal text-gray-600">
          Welcome back! Please enter your details.
        </p>
        <div class="flex flex-col gap-5 mt-8">
          <label for="email" class="flex flex-col gap-1.5">
            <p class="text-sm font-medium text-gray-700">Email*</p>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              v-model="email"
              required
            />
          </label>

          <label for="password" class="flex flex-col gap-1.5">
            <p class="text-sm font-medium text-gray-700">Password*</p>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              v-model="password"
              required
            />
          </label>
          <div class="flex items-center justify-between mt-1">
            <label
              for="remember"
              class="block text-sm text-gray-900 font-medium"
            >
              <input
                id="remember"
                name="remember"
                type="checkbox"
                class="mr-2 bg-purple-600 border-transparent rounded h-4 w-4"
              />
              Remember for 30 days
            </label>
            <p class="text-sm font-normal text-gray-600">
              <RouterLink
                to="/forget-password"
                class="text-purple-700 font-semibold"
                >Forgot password</RouterLink
              >
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-4 mt-6">
          <PurpleButtonVue class="h-11 w360" type="submit" @click="submit">
            Sign in
          </PurpleButtonVue>
          <WhiteButtonVue
            class="h-11 w360 flex items-center justify-center gap-3"
            @click="signInWithGoogle"
            type="button"
          >
            <img
              src="../assets/google.svg"
              alt="google-icon"
              height="24"
              width="24"
            />
            Sign in with Google
          </WhiteButtonVue>
        </div>
        <div>
          <p class="text-sm font-normal text-gray-600 mt-8">
            Don’t have an account?
            <RouterLink to="/signup" class="text-purple-700 font-semibold"
              >Sign up</RouterLink
            >
          </p>
        </div>
      </form>
    </template>
  </AuthLayout>
</template>

<script>
import Input from "../components/Input.vue";
import PurpleButtonVue from "../components/PurpleButton.vue";
import WhiteButtonVue from "../components/WhiteButton.vue";
import { ref } from "vue";
import AuthLayout from "../Layouts/AuthLayout.vue";
import { useRouter } from "vue-router";
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  auth,
  provider,
  onAuthStateChanged,
} from "../Config/firebase.js";
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useStore } from "vuex";

export default {
  name: "Login",
  components: {
    Input,
    PurpleButtonVue,
    WhiteButtonVue,
    AuthLayout,
  },
  setup() {
    const email = ref("");
    const password = ref("");

    const store = useStore();
    const router = useRouter();
    const db = getFirestore();

    const onSubmit = async () => {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          lastLogin: serverTimestamp(),
        });
        // store.commit("SET_USER", user);
        console.log(user);
        router.push("/dashboard/overview");
      } catch (error) {
        alert(error.message)
      }
    };

    const signInWithGoogle =  () => {
      signInWithRedirect(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          const userRef = doc(db, "users", user.uid);
          updateDoc(userRef, {
            lastLogin: serverTimestamp(),
          });
          // store.commit("SET_USER", user);
          router.push("/dashboard/overview");
          //console.log("Document successfully updated!");
          // ...
          // store.commit("SET_USER", user);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    };

    return {
      email,
      password,
      onSubmit,
      signInWithGoogle,
    };
  },
};
</script>

<style scoped>
form {
  font-family: "Inter", sans-serif;
}

.w360 {
  width: 360px;
}
</style>
