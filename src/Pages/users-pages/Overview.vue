<template>
  <div>
    <div>
      <h1>Users</h1>
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
