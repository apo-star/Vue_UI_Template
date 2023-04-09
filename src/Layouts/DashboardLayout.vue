<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <SideBar />

    <!-- Page content -->
    <div class="flex-1 overflow-auto">
      <slot name="dashboard-contents" />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
};
</script>
