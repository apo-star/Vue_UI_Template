<template>
  <DashboardLayout>
    <template v-slot:dashboard-contents>
      <div class="flex h-screen overflow-hidden flex-row w-full">
        <!-- Sidebar -->

        <div class="">
          <ChatSideBar />
        </div>
        <div class="flex-1 overflow-auto">
          <!-- Component -->
          <router-view></router-view>
        </div>
      </div>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../Layouts/DashboardLayout.vue";
import ChatSideBar from "../SubSideBars/ChatSideBar.vue";

export default {
  name: "Messages",
  components: {
    DashboardLayout,
    ChatSideBar,
  },
};
</script>
