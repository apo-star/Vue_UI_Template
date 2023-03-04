<template>
  <div class="bg-gray-50 py-24 gap-10 flex flex-col">
    <div class="flex flex-col gap-5">
      <h4 class="text-gray-900 font-semibold text-4xl text-center">
        Start your free trial
      </h4>
      <p class="text-gray-600 text-center font-normal text-xl">
        Join over 4,000+ startups already growing with Untitled.
      </p>
    </div>
    <div
        class="flex flex-row justify-center items-center gap-3"
    >
      <WhiteButton class="h-12 w-32"> Learn more </WhiteButton>
      <PurpleButton class="h-12 w-32"> Get started </PurpleButton>
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
