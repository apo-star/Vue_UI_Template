<template>
  <div class="modal flex justify-center items-center" @click="closeModal">
    <div
      class="modal-content flex flex-col gap-4"
      @click.stop
      style="height: 500px"
    >
      <div
        class="flex justify-between items-center border-b-gray-200 border-b pb-6"
      >
        <h1 class="text-2xl font-semibold text-gray-900">New Message</h1>
        <button @click="closeModal">
          <img
            src="../../assets/dashboardIcons/close.svg"
            alt="close"
            class=""
            height="20"
            width="20"
          />
        </button>
      </div>
      <div class="flex items-center">
        <!-- search svg -->
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-purple-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <Input
          class="w-full border-none focus:ring-0 focus:outline-none shadow-none"
          label="Search for people"
          placeholder="Search for people"
          v-model="searchQuery"
        />
      </div>
      <div class="modal-scroll">
        <router-link
          v-for="user in filteredUsers"
          :key="user.id"
          :to="{
            name: 'ChatRoom',
            params: { idone: loggedInUser.id, idtwo: user.id },
          }"
          class="flex items-center gap-4 py-4"
          @click="closeModal"
        >
          <img
            :src="
              user.photoURL
                ? user.photoURL
                : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'
            "
            alt="avatar"
            class="h-10 w-10 rounded-full"
          />
          <div class="flex flex-col">
            <p class="font-medium text-gray-900">
              {{ user.displayName ? user.displayName : "" }}
              <span v-if="user.admin" class="relative" title="Admin">
                <img
                  src="../../assets/profileIcons/admin-tag.svg"
                  alt="admin"
                  class="h-6 w-6 inline-block"
                  title="Admin"
                />
                <p
                  class="absolute top-1 left-2 text-xs font-semibold text-white"
                >
                  A
                </p>
              </span>
            </p>
            <p class="text-gray-500 text-sm">{{ user.username }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Input from "../Input.vue";
export default {
  name: "NewMessageModal",
  components: {
    Input,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState(["users"]),
    loggedInUser() {
      return this.$store.state.user;
    },
    filteredUsers() {
      // Filter the 'users' array based on the search query
      return this.users.filter((user) =>
        // user.displayName
        //   .toLowerCase()
        //   .includes(this.searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
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
  /* margin: 10% auto; */
  padding: 24px;
  border: 1px solid #888;
  width: 600px;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
}

.modal-scroll {
  max-height: 400px; /* Set the desired maximum height */
  overflow-y: auto;
}
</style>
