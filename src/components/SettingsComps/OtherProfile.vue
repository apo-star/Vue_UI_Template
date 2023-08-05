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
      @submit.prevent="updateUserDetails"
    >
      <div class="flex flex-col p-6 gap-6">
        <label for="username" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Username</p>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            v-model="username"
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
            v-model="bio"
            maxlength="160"
            placeholder="Tell us about yourself"
            style="width: 70%"
            class="pl-3.5 h-32 border border-solid bg-white border-gray-300 font-normal text-base text-gray-900 rounded-lg px-3.5 py-2.5 shadow-sm focus:border-purple-300 focus:border focus:shadow-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:background-gray-50 disabled:border-gray-300 disabled:text-gray-500 after:bg-white transition duration-300 ease-in-out"
          ></textarea>
        </label>
        <label for="location" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Location</p>
          <Input
            id="location"
            type="text"
            v-model="location"
            placeholder="California, US"
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="website" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Website</p>
          <Input
            id="website"
            type="text"
            v-model="website"
            placeholder="Enter your website"
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
            v-model="facebook"
            placeholder="https://facebook.com/username"
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="twitter" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Twitter Profile</p>
          <Input
            id="twitter"
            type="text"
            v-model="twitter"
            placeholder="https://twitter.com/username"
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="instagram" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Instagram Profile</p>
          <Input
            id="instagram"
            type="text"
            v-model="instagram"
            placeholder="https://instagram.com/username"
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="linkedin" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">LinkedIn Profile</p>
          <Input
            id="linkedin"
            type="text"
            v-model="linkedin"
            placeholder="https://www.linkedin.com/in/username"
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="github" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Github Profile</p>
          <Input
            id="github"
            type="text"
            v-model="github"
            placeholder="https://github.com/username"
            style="width: 70%"
            class="pl-3.5"
          />
        </label>
        <label for="youtube" class="flex flex-col gap-1.5 relative">
          <p class="text-sm font-medium text-gray-700">Youtube Profile</p>
          <Input
            id="youtube"
            type="text"
            v-model="youtube"
            placeholder="https://youtube.com/@username"
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
import { mapState, useStore } from "vuex";
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db, auth } from "../../Config/firebase.js";

export default {
  name: "OtherProfile",
  components: {
    PurpleButton,
    WhiteButton,
    Input,
  },
  data() {
    return {
      username: "",
      bio: "",
      location: "",
      website: "",
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
      github: "",
      youtube: "",
    };
  },
  mounted() {
    this.username = this.$store.state.user.username;
    this.bio = this.$store.state.user.bio;
    this.location = this.$store.state.user.location;
    this.website = this.$store.state.user.website;
    //social media links should be created first if they don't exist
    if (this.$store.state.user.socials) {
      this.facebook = this.$store.state.user.socials.facebook;
      this.twitter = this.$store.state.user.socials.twitter;
      this.instagram = this.$store.state.user.socials.instagram;
      this.linkedin = this.$store.state.user.socials.linkedin;
      this.github = this.$store.state.user.socials.github;
      this.youtube = this.$store.state.user.socials.youtube;
    }
  },
  methods: {
    async updateUserDetails() {
      const user = auth.currentUser;
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);

          if (username === "") {
            alert("Username cannot be empty");
            return;
          }

          // Check if username is taken through vuex store
          if (this.$store.state.user.username !== this.username) {
            const q = query(
              collection(db, "users"),
              where("username", "==", this.username)
            );
            const querySnapshot = await getDocs(q);
            if (querySnapshot.size > 0) {
              alert("Username is taken");
              return;
            }
          }

          await updateDoc(docRef, {
            username: this.username ? this.username : this.username,
            bio: this.bio ? this.bio : "",
            location: this.location ? this.location : "",
            website: this.website ? this.website : "",
            socials: {
              facebook: this.facebook ? this.facebook : "",
              twitter: this.twitter ? this.twitter : "",
              instagram: this.instagram ? this.instagram : "",
              linkedin: this.linkedin ? this.linkedin : "",
              github: this.github ? this.github : "",
              youtube: this.youtube ? this.youtube : "",
            },
          });

          // Update in store
          this.$store.commit("SET_USER_USERNAME", this.username);
          this.$store.commit("SET_USER_BIO", this.bio);
          this.$store.commit("SET_USER_LOCATION", this.location);
          this.$store.commit("SET_USER_WEBSITE", this.website);
          this.$store.commit("SET_USER_SOCIALS", {
            facebook: this.facebook,
            twitter: this.twitter,
            instagram: this.instagram,
            linkedin: this.linkedin,
            github: this.github,
            youtube: this.youtube,
          });
          alert("Profile updated successfully");
          //console.log("Document updated successfully", this.$store.state.user);
          //console.log(existingUser.docs.length);
        } catch (e) {
          console.error("Error updating document: ", e);
        }
      }
    },
  },
};
</script>
