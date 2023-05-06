<template>
  <AuthLayout>
    <template v-slot:auth-contents>
      <form
        class="pt-24 h-screen flex flex-col items-center w-full"
        @submit.prevent="onSubmit"
      >
        <img
          src="../assets/logo.png"
          alt="logo"
          height="32"
          width="32"
          class="rounded-lg"
        />
        <label for="email" class="flex flex-col gap-1.5">
          <p class="text-sm font-medium text-gray-700 text-left">Email:</p>

          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            class="h-11 w-360"
            v-model="email"
          />
        </label>
        <div class="flex flex-col gap-4 mt-6">
          <PurpleButton class="h-11 w-360" type="submit" @click="submit">
            Send Password Reset Email
          </PurpleButton>
        </div>
      </form>
    </template>
  </AuthLayout>
</template>

<script>
import AuthLayout from "../Layouts/AuthLayout.vue";
import Input from "../components/Input.vue";
import PurpleButton from "../components/PurpleButton.vue";
import { auth, sendPasswordResetEmail } from "../Config/firebase.js";
import { ref } from "vue";

export default {
  name: "ForgetPassword",
  components: {
    AuthLayout,
    PurpleButton,
    Input,
  },
  setup() {
    const email = ref("");
    const onSubmit = async () => {
      try {
        await sendPasswordResetEmail(auth, email.value, {
          url: "https://pricing-page-fox.netlify.app/login",
          handleCodeInApp: true,
        });
        alert("Password reset email sent!");
      } catch (error) {
        alert(error.message);
      }
    };
    return {
      email,
      onSubmit,
    };
  },
};
</script>

<style scoped>
.w-360 {
  width: 360px;
}
</style>
