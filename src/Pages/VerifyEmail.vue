<template>
  <div class="max-w-lg mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4">Request New Verification Link</h1>

    <div
      v-if="showSuccess"
      class="bg-green-100 text-green-800 p-4 rounded mb-4"
    >
      <p>
        Your request for a new verification link has been received. Please check
        your email inbox for instructions on how to verify your email address.
      </p>
    </div>

    <div v-if="showError" class="bg-red-100 text-red-800 p-4 rounded mb-4">
      <p>There was an error processing your request. Please try again later.</p>
      <button
        @click="goBack"
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mt-4"
      >
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm0 18.5a8.5 8.5 0 1 1 8.5-8.5 8.5 8.5 0 0 1-8.5 8.5zM9 9V5a1 1 0 0 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4z"
          />
        </svg>
        <span>Go Back</span>
      </button>
    </div>

    <div
      v-if="!isVerified"
      class="bg-yellow-100 text-yellow-800 p-4 rounded mb-4"
    >
      <p>
        Your email address has not yet been verified. Please check your inbox
        for a verification email or click the button below to request a new
        verification link.
      </p>
      <button
        v-if="requestCount < maxRequestCount"
        @click="requestVerificationLink"
        class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Request New Verification Link
      </button>
      <p v-else class="text-sm text-gray-500 mt-2">
        You have reached the maximum number of verification link requests.
        Please wait a while before requesting again.
      </p>
    </div>

    <div v-else>
      <p class="bg-green-100 text-green-800 p-4 rounded mb-4">
        Your email address has already been verified.
      </p>
      <button
        @click="goBack"
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mt-4"
      >
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm0 18.5a8.5 8.5 0 1 1 8.5-8.5 8.5 8.5 0 0 1-8.5 8.5zM9 9V5a1 1 0 0 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4z"
          />
        </svg>
        <span>Go Back</span>
      </button>
    </div>
  </div>
</template>

<script>
import { auth, sendEmailVerification } from "@/Config/firebase.js";
import { useRouter } from "vue-router";

export default {
  name: "VerifyEmail",
  data() {
    return {
      showSuccess: false,
      showError: false,
      maxRequestCount: 3,
      requestCount: 0,
    };
  },

  computed: {
    isVerified() {
      return auth.currentUser && auth.currentUser.emailVerified;
    },
  },

  methods: {
    async requestVerificationLink() {
      try {
        await sendEmailVerification(auth.currentUser);
        this.showSuccess = true;
        this.showError = false;
        this.requestCount++;
      } catch (error) {
        this.showSuccess = false;
        this.showError = true;
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
button:hover {
  cursor: pointer;
}
</style>
