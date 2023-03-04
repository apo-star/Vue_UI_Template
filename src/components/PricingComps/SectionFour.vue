<template>
  <div class="py-24 px-28 xl:px-20 flex flex-col gap-11 md:py-16 md:px-4">
    <div class="flex flex-col gap-5 md:gap-4">
      <div class="flex justify-between md:flex-col md:gap-8">
        <h2 class="font-semibold text-4xl text-gray-900 md:text-3xl">
          Start your free trial
        </h2>
        <div class="lg:flex lg:flex-col lg:gap-3">
          <WhiteButton class="px-5 py-3 shadow-sm mr-3 lg:mr-0">
            Learn more
          </WhiteButton>
          <PurpleButton
            class=" px-5 py-3 shadow-sm"
          >
            Get started
          </PurpleButton>
        </div>
      </div>
      <p class="text-xl font-normal text-gray-600 md:text-lg">
        Join over 4,000+ startups already growing with Untitled.
      </p>
    </div>
    <div class="grid grid-rows-2 grid-flow-col gap-y-8 w768 md:grid-rows-4">
      <a href="" class="font-bold text22 text-gray-900">Epicurious</a>
      <a href="" class="font-bold text22 text-gray-900">Alt + Shift</a>
      <a href="" class="font-bold text22 text-gray-900">cloudwatch</a>
      <a href="" class="font-bold text22 text-gray-900">Luminous</a>
      <a href="" class="font-bold text22 text-gray-900">Acme Corp</a>
      <a href="" class="font-bold text22 text-gray-900">FocalPoint</a>
      <a href="" class="font-bold text22 text-gray-900">polyMath</a>
      <a href="" class="font-bold text22 text-gray-900">Galileo</a>
    </div>
  </div>
</template>

<style scoped>
.w768 {
  width: 768px;
}

.text22 {
  font-size: 22px;
}
@media (max-width: 1023px) {
  .w768 {
    width: 100%;
  }
}
</style>

<script>
import PurpleButton from "../PurpleButton.vue";
import WhiteButton from "../WhiteButton.vue";

export default {
  name: "SectionFour",
  components: {
    PurpleButton,
    WhiteButton,
  },
};
</script>
