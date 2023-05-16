<template>
  <div class="flex flex-col justify-center items-center gap-5 mx-auto h-full">
    <div class="flex flex-col justify-center items-center gap-2">
      <img
        src="../../assets/profileIcons/messages-1.svg"
        alt="messages"
        class="h-28 w-28"
      />
      <h1 class="text-2xl font-semibold text-gray-900">Messages</h1>
      <p class="text-gray-500 text-center w-96 font-medium text-xs">
        You have several options to continue your messaging journey. You can
        choose from your existing conversations, start a new one with someone
        new, or simply keep swimming and wait for someone to message you. The
        choice is yours!
      </p>
    </div>
    <PurpleButton
      class="px-3.5 h-10 text-sm font-semibold mt-2"
      @click="openModal"
      type="button"
    >
      New Message
    </PurpleButton>
    <NewMessageModal v-if="showModal" @close="closeModal" />
  </div>
</template>

<script>
import PurpleButton from "../../components/PurpleButton.vue";
import NewMessageModal from "../../components/ProfileComps/NewMessageModal.vue";

export default {
  name: "Messages",
  components: {
    PurpleButton,
    NewMessageModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
  },
};
</script>
