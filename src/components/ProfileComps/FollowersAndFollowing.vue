<template>
  <DashboardLayout>
    <template v-slot:dashboard-contents>
      <div class="bg-gray-50 min-h-screen">
        <ConnectionHeader />
        <router-view></router-view>
      </div>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import ConnectionHeader from './ConnectionHeader.vue';

export default {
  name: "FollowersAndFollowing",
  components: {
    DashboardLayout,
    ConnectionHeader,
  },
};
</script>
