<template>
  <div class="flex gap-8 mb-12">
    <div class="w-max">
      <h5 class="text-gray-700 font-medium text-sm">Public profile</h5>
      <p class="text-gray-600 font-normal text-sm w-max">
        Update your public profile information.
      </p>
    </div>
    <form
      class="flex flex-col border border-gray-200 rounded-xl shadow-sm bg-white w-full"
    >
      <div class="flex flex-col p-6 gap-6">
        <label for="username" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Username</p>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            required
            style="width: 70%"
            class="pl-3.5"
          />
          <!-- <img
            src="../../assets/dashboardIcons/mail.svg"
            alt="avatar"
            class="h-5 w-5 absolute top-9 left-3"
          /> -->
        </label>
        <label for="bio" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Bio</p>
          <textarea
            id="bio"
            type="text"
            placeholder="Tell us about yourself"
            required
            style="width: 70%"
            class="pl-3.5 h-32 border border-solid bg-white border-gray-300 font-normal text-base text-gray-900 rounded-lg px-3.5 py-2.5 shadow-sm focus:border-purple-300 focus:border focus:shadow-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:background-gray-50 disabled:border-gray-300 disabled:text-gray-500 after:bg-white transition duration-300 ease-in-out"
          ></textarea>
        </label>
        <label for="location" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Location</p>
          <Input
            id="location"
            type="text"
            placeholder="California, US"
            required
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="website" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Website</p>
          <Input
            id="website"
            type="text"
            placeholder="Enter your website"
            required
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <h5 class="font-semibold text-gray-900 text-base">
          Social Media Links
        </h5>
        <label for="facebook" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Facebook Profile</p>
          <Input
            id="facebook"
            type="text"
            placeholder="https://facebook.com/username"
            required
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="twitter" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Twitter Profile</p>
          <Input
            id="twitter"
            type="text"
            placeholder="https://twitter.com/username"
            required
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="instagram" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Instagram Profile</p>
          <Input
            id="instagram"
            type="text"
            placeholder="https://instagram.com/username"
            required
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="linkedin" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">LinkedIn Profile</p>
          <Input
            id="linkedin"
            type="text"
            placeholder="https://www.linkedin.com/in/username"
            required
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="github" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Github Profile</p>
          <Input
            id="github"
            type="text"
            placeholder="https://github.com/username"
            required
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="youtube" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Youtube Profile</p>
          <Input
            id="youtube"
            type="text"
            placeholder="https://youtube.com/@username"
            required
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
      </div>
      <div class="flex gap-3 py-4 pr-6 border-t border-gray-200 justify-end">
        <WhiteButton class="px-4 h-10 text-sm font-semibold" type="button">
          Cancel
        </WhiteButton>
        <PurpleButton
          class="px-4 h-10 text-sm font-semibold"
          type="submit"
          @click="submit"
        >
          Save changes
        </PurpleButton>
      </div>
    </form>
  </div>
</template>

<script>
import PurpleButton from "../PurpleButton.vue";
import WhiteButton from "../WhiteButton.vue";
import Input from "../Input.vue";
import { mapState } from "vuex";
import {doc, setDoc, updateDoc} from "firebase/firestore";
import {db, auth,} from "../../Config/firebase.js";

export default {
  name: "OtherProfile",
  components: {
    PurpleButton,
    WhiteButton,
    Input,
  },
    methods: {
    
    },
};
</script>
