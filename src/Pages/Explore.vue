<template>
  <DashboardLayout>
    <template v-slot:dashboard-contents>
      <div class="w-full">
        <h1 class="text-gray-300 text-7xl text-center italic mt-40">
           This page is under construction.
        </h1>
        <h2 class="text-gray-300 text-7xl text-center italic mt-10">
            Check back soon.
        </h2>
      </div>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../Layouts/DashboardLayout.vue";
export default {
  name: "Explore",
  components: {
    DashboardLayout,
  },
};
</script>
