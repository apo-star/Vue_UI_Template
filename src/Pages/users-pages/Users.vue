<template>
  <DashboardLayout>
    <template v-slot:dashboard-contents>
      <div class="flex flex-row justify-between">
        <router-view></router-view>
      </div>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../../Layouts/DashboardLayout.vue";

export default {
  name: "Users",
  components: {
    DashboardLayout,
  },
};
</script>

<style scoped>
.gg {
  position: sticky;
  top: 0;
}
</style>
