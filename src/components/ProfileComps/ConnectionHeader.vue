<template>
  <div class="w-full pt-32 pb-8">
    <div
      class="h-24 bg-gradient-to-br from-blue-300 via-green-200 to-pink-300 px-10 py-5 fixed top-0 w-full"
    >
      <div>
        <router-link
          :to="{ name: 'Profile', params: { username: username } }"
          class="p-3 bg-white rounded-md"
        >
          <img
            src="../../assets/profileIcons/arrow-left.svg"
            class="h-10 w-10 inline-block"
            alt="arrow-left"
          />
        </router-link>
      </div>
    </div>
    <div class="bg-white w-96 p-4  shadow-md rounded-lg mx-auto font-semibold text-base flex gap-10">
      <router-link
        :to="`/${username}/followers`"
        class="p-3 text-center w-2/5  rounded-md text-purple-600 transition duration-500 ease-in-out hover:text-purple-800 hover:bg-purple-100"
        active-class="bg-purple-100 text-purple-800"
      >
        Followers
      </router-link>
      <router-link
        :to="`/${username}/following`"
        class="p-3 w-2/5 text-center rounded-md text-purple-600 transition duration-500 ease-in-out hover:text-purple-800 hover:bg-purple-100"
        active-class="bg-gray-100 text-purple-800"
      >
        Following
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ConnectionHeader",

  data() {
    username: this.$route.params.username;
    loading: true;
  },
  watch: {
    $route: {
      immediate: true, // call the handler immediately on initial mount
      handler(newVal, oldVal) {
        this.username = newVal.params.username;
      },
    },
  },
  computed: {
    ...mapState(["users"]),
    routeUser() {
      return this.users.find((user) => user.username === this.username);
    },
  },
};
</script>
