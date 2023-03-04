<template>
  <div class="bg-gray-50 py-24 gap-10 flex flex-col md:gap-8 md:py-16 md:px-4">
    <div class="flex flex-col gap-5 md:gap-4">
      <h4 class="text-gray-900 font-semibold text-4xl text-center md:text-3xl">
        Start your free trial
      </h4>
      <p class="text-gray-600 text-center font-normal text-xl md:text-lg">
        Join over 4,000+ startups already growing with Untitled.
      </p>
    </div>
    <div
        class="flex flex-row justify-center items-center gap-3 md:flex-col"
    >
      <WhiteButton class="h-12 w-32 md:w-80"> Learn more </WhiteButton>
      <PurpleButton class="h-12 w-32 md:w-80"> Get started </PurpleButton>
    </div>
  </div>
</template>

<script>
import PurpleButton from "../PurpleButton.vue";
import WhiteButton from "../WhiteButton.vue";

export default {
  name: "SectionSeven",
  components: {
    PurpleButton,
    WhiteButton,
  },
};
</script>
