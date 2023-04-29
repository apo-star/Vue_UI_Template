<template>
    <div>
      <input type="file" @change="handleFileUpload" />
    </div>
  </template>
  
  <script>
  import { ref } from "firebase/storage";
  import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
  import { app, updateProfile } from "./firebase.js";
  
  export default {
    name: "ImageUploader",
    data() {
      return {
        currentUser: null,
        storage: null,
        file: null,
        loading: false,
      };
    },
    mounted() {
      // Get the current user from Firebase Authentication
      auth.onAuthStateChanged((user) => {
        this.currentUser = user;
      });
      // Get the Firebase Storage instance
      this.storage = getStorage(app);
    },
    methods: {
      async handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) {
          return;
        }
        this.file = file;
        const fileRef = ref(this.storage, `${this.currentUser.uid}.jpg`);
  
        try {
          this.loading = true;
          const snapshot = await uploadBytes(fileRef, file);
          const photoURL = await getDownloadURL(fileRef);
          await updateProfile(this.currentUser, { photoURL });
          alert("Image uploaded successfully");
        } catch (error) {
          console.log(error);
          alert("Failed to upload image");
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  