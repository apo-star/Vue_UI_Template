<template>
  <AuthLayout>
    <template v-slot:auth-contents>
      <form
        @submit.prevent="onSubmit"
        class="pt-24 h-screen flex flex-col items-center w-full"
      >
        <img
          src="../assets/logo.png"
          alt=""
          height="32"
          width="32"
          class="rounded-lg"
        />
        <h3 class="font-semibold text-3xl text-gray-900 mt-6 mb-3">
          Create an account
        </h3>
        <p class="text-base font-normal text-gray-600">
          Start your 30-day free trial.
        </p>
        <div class="flex flex-col gap-5 mt-8">
          <label for="name" class="flex flex-col gap-1.5">
            <p class="text-sm font-medium text-gray-700">Name*</p>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              v-model="displayName"
              required
            />
          </label>

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
            <p class="text-sm font-normal text-gray-600">
              Must be at least 8 characters.
            </p>
          </label>
        </div>
        <div class="flex flex-col gap-4 mt-6">
          <PurpleButtonVue class="h-11 w360" type="submit" @click="submit">
            Get started
          </PurpleButtonVue>
          <WhiteButtonVue
            class="h-11 w360 flex items-center justify-center gap-3"
            @click="signInWithGoogle"
          >
            <img
              src="../assets/google.svg"
              alt="google-icon"
              height="24"
              width="24"
            />
            Sign up with Google
          </WhiteButtonVue>
        </div>
        <div>
          <p class="text-sm font-normal text-gray-600 mt-8">
            Already have an account?
            <RouterLink to="/login" class="text-purple-700 font-semibold"
              >Log in</RouterLink
            >
          </p>
        </div>
      </form>
      <button
        class="h-11 w360 flex items-center justify-center gap-3"
        @click="signInWithGoogle"
      >
        google
      </button>
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
  createUserWithEmailAndPassword,
  signInWithRedirect,
  auth,
  provider,
  createUserProfileDocument,
  updateProfile,
} from "../Config/firebase.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useStore } from "vuex";

export default {
  name: "SectionOne",
  components: {
    Input,
    PurpleButtonVue,
    WhiteButtonVue,
    AuthLayout,
  },
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const store = useStore();
    const router = useRouter();
    const db = getFirestore();
    //store.getters["auth/getUser"];

    const onSubmit = async () => {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        // await updateProfile(user, {
        //   displayName: displayName.value,
        // });
        await createUserProfileDocument(user, {
          displayName: displayName.value,
          email: email.value,
          //gg
        });
        router.push("/settings/profile");
      } catch (error) {
        console.log(error, "error");
      }
    };

    const signInWithGoogle = () => {
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
          })
            .then(() => {
              // store.commit("SET_USER", user);
              router.push("/dashboard/overview");
            })
            .catch((error) => {
              console.log(error);
            });
          // ...
          //store.commit("SET_USER", user);
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
      displayName,
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
