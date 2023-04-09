<template>
  <div class="px-8 pt-8 pb-12 flex flex-col gap-7">
    <h1 class="text-gray-900 font-semibold text-3xl">Users</h1>
    <div>
      <div v-for="user in users" :key="user.id">
        <h1>{{ user.displayName }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
    ...mapState(["users"]),
  },
};
</script>
