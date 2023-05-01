<template>
  <div class="w-full relative min-h-screen bg-gray-50">
    <div
      class="h-60 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-yellow-500 w-full"
    ></div>
    <div class="flex flex-col gap-20">
      <div class="flex justify-between pr-8 pt-6" style="padding-left: 216px">
        <img
          :src="user.photoURL"
          alt="avatar"
          class="h-40 w-40 rounded-full border-4 border-white absolute left-8 shadow-lg"
          style="top: 200px"
        />
        <img
          src="../../assets/dashboardIcons/verified-tick.svg"
          alt="avatar"
          class="h-8 w-8 absolute top-80"
          style="left: 151px"
        />
        <div>
          <h1 class="text-3xl font-semibold text-gray-900">
            {{ user.displayName }}
          </h1>
          <p class="text-gray-600 text-base font-normal">{{ user.email }}</p>
        </div>
        <PurpleButton class="px-4 h-10 text-sm font-semibold">
          View profile
        </PurpleButton>
      </div>
      <div class="px-8 flex flex-col gap-5">
        <div class="flex gap-8">
          <div class="w-max">
            <h5 class="text-gray-700 font-medium text-sm">Personal info</h5>
            <p class="text-gray-600 font-normal text-sm w-max">
              Update your photo and personal details.
            </p>
          </div>
          <form
            class="flex flex-col border border-gray-200 rounded-xl shadow-sm bg-white w-full"
            @submit.prevent="updateDetails"
          >
            <div class="flex flex-col p-6 gap-6">
              <div class="flex gap-6">
                <label for="firstName" class="flex flex-col gap-1.5 w-full">
                  <p class="text-sm font-medium text-gray-700">First name</p>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    required
                    v-model="firstName"
                    style="width: 90%"
                  />
                </label>
                <label for="lastName" class="flex flex-col gap-1.5 w-full">
                  <p class="text-sm font-medium text-gray-700">Last name</p>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    required
                    v-model="lastName"
                    style="width: 90%"
                  />
                </label>
              </div>
              <label for="email" class="flex flex-col gap-1.5 relative">
                <p class="text-sm font-medium text-gray-700">Email address</p>
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email address"
                  required
                  v-model="email"
                  :value="currentUser?.email"
                  style="width: 70%"
                  class="pl-11"
                />
                <img
                  src="../../assets/dashboardIcons/mail.svg"
                  alt="avatar"
                  class="h-5 w-5 absolute top-9 left-3"
                />
              </label>
              <div class="flex justify-between gap-5">
                <!--  -->
                <img
                  :src="imgSrc"
                  alt="avatar"
                  class="h-16 w-16 rounded-full"
                />
                <div
                  class="flex items-center flex-col gap-3 py-4 border border-dashed border-gray-200 w-full rounded-xl hover:bg-gray-50 cursor-pointer transition duration-300 ease-in-out"
                  @click="showModal = true"
                >
                  <div
                    class="w-12 h-12 bg-violet-100 rounded-full text-center flex justify-center items-center border-8 border-solid border-violet-50 p-2"
                  >
                    <img
                      src="../../assets/dashboardIcons/download-cloud.svg"
                      class="h-5 w-5 m-auto"
                      alt="upload"
                    />
                  </div>
                  <div>
                    <p
                      class="text-sm font-semibold text-purple-700 text-center"
                    >
                      Click to upload
                    </p>
                    <p class="text-xs font-normal text-gray-600 text-center">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex gap-3 py-4 pr-6 border-t border-gray-200 justify-end"
            >
              <WhiteButton
                class="px-4 h-10 text-sm font-semibold"
                type="button"
              >
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
          <div v-if="showModal" @click="showModal = false" class="modal">
            <div class="modal-content flex flex-col gap-4" @click.stop>
              <div
                class="flex justify-between items-center border-b-gray-200 border-b pb-6"
              >
                <h1 class="text-2xl font-semibold text-gray-900">
                  Upload your photo
                </h1>
                <div>
                  <button @click="showModal = false">
                    <img
                      src="../../assets/dashboardIcons/close.svg"
                      alt="close"
                      class=""
                      height="20"
                      width="20"
                    />
                  </button>
                </div>
              </div>
              <label for="upload" class="flex flex-col gap-1.5 relative">
                <Input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                  id="photoURL"
                  type="file"
                  placeholder="Profile Picture"
                  required
                  name="photoURL"
                  @change="handleImageChange"
                  accept="image/*"
                />
              </label>
              <div class="justify-self-center flex justify-center">
                <img
                  :src="imagePreview"
                  alt="Preview of the selected image"
                  class="h-64 w-64 object-cover"
                />
              </div>

              <div class="flex justify-end gap-5">
                <WhiteButton
                  class="px-4 h-10 text-sm font-semibold"
                  @click="showModal = false"
                >
                  Cancel upload
                </WhiteButton>
                <PurpleButton
                  class="px-4 h-10 text-sm font-semibold"
                  @click="handleImageClick"
                  :disabled="!photo"
                  type="submit"
                  id="upload-button"
                >
                  Upload photo
                </PurpleButton>
              </div>
            </div>
          </div>
        </div>
        <p class="bg-gray-200 h-px "></p>
        <OtherProfile />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PurpleButton from "../../components/PurpleButton.vue";
import WhiteButton from "../../components/WhiteButton.vue";
import Input from "../../components/Input.vue";
import OtherProfile from "../../components/SettingsComps/OtherProfile.vue";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db, updateProfile, updateEmail } from "../../Config/firebase.js";
import { uploadImage } from "../../Config/firebaseStorage";
import devImg from "../../assets/dashboardIcons/avatar-default.png";
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "ProfileSettings",
  props: {
    size: {
      type: String,
      default: "md",
    },
  },
  components: {
    PurpleButton,
    WhiteButton,
    Input,
    OtherProfile,
  },

  data() {
    return {
      email: "",
      lastName: "",
      firstName: "",
      displayName: "",
    };
  },

  setup(props) {
    const store = useStore();
    const showModal = ref(false);
    const disabledButton = ref(true);
    const photoURL = ref(
      "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
    );
    const photo = ref(null);

    const currentUser = auth.currentUser;

    if (currentUser?.photoURL) {
      photoURL.value = currentUser.photoURL;
      console.log(currentUser.photoURL);
    }

    watch(
      () => auth.currentUser?.photoURL,
      (newPhotoURL) => {
        photoURL.value = newPhotoURL;
      }
    );

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 1000000) {
          alert("File size must be less than 1MB");
          return;
        }
        photo.value = file;
        createImagePreview(photo.value);
      } else {
        photo.value = null;
      }
    };

    const createImagePreview = (file) => {
      const reader = new FileReader();
      reader.onload = () => {
        photoURL.value = reader.result;
      };
      reader.readAsDataURL(file);
    };

    watch(
      () => photo.value,
      (newPhoto) => {
        createImagePreview(newPhoto);
      }
    );

    const handleImageClick = async () => {
      if (currentUser) {
        await uploadImage(photo.value, currentUser);
        const userRef = doc(db, "users", currentUser.uid);
        await updateDoc(userRef, {
          photoURL: photoURL.value,
        });
        await store.commit("SET_USER_PHOTO_URL", photoURL.value);
        showModal.value = false;
        alert("image uploaded");
      }
    };

    return {
      photoURL,
      showModal,
      handleImageChange,
      handleImageClick,
      photo,
    };
  },

  mounted() {
    this.email = this.user.email;
    this.lastName = this.user.displayName.split(" ")[1];
    this.firstName = this.user.displayName.split(" ")[0];
  },

  methods: {
    async updateDetails() {
      const currentUser = auth.currentUser;

      if (currentUser) {
        try {
          // Update the user's display name
          await updateProfile(currentUser, {
            displayName: `${this.firstName} ${this.lastName}`,
            //  email: this.email,
          });
          // Update the user's email
          await updateEmail(currentUser, email.value);
          // Update the user's document in the database
          const userRef = doc(db, "users", currentUser.uid);
          await updateDoc(userRef, {
            displayName: `${this.firstName} ${this.lastName}`,
            email: this.email,
          });
          // Update the user's details in the store
          await this.$store.commit(
            "SET_USER_DISPLAY_NAME",
            `${this.firstName} ${this.lastName}`
          );
          await this.$store.commit("SET_USER_EMAIL", this.email);
          alert("Details updated successfully");
          //console.log(this.$store.state.user);
        } catch (error) {
          console.log(error);
        }
      }
    },
  },

  computed: {
    ...mapState(["user"]),
    imgSize() {
      return this.size ? `profile-image--${this.size}` : "";
    },
    imagePreview() {
      return this.photoURL;
    },
    imgSrc() {
      return this.user.photoURL;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 24px;
  border: 1px solid #888;
  width: 688px;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
}
</style>
