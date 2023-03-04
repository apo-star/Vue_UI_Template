<template>
  <div class="pt-24 px-28r pb-5 md:py-16 md:px-4">
    <h4
      class="text-center text-purple-700 font-medium text-sm bg-purple-50 w-fit flex rounded-2xl mx-auto p-1 gap-3 md:text-xs md:gap-2"
    >
      <span class="py-0.5 px-2.5 bg-white rounded-2xl"> New feature </span>
      <RouterLink to="/pricing" class="py-0.5 pr-2.5">
        Check out the team dashboard
        <img
          src="@/assets/arrow-right.svg"
          alt="arrow-right"
          height=""
          width="18"
          class="font-semibold inline-block my-auto"
        />
      </RouterLink>
    </h4>
    <h2 class=" px-28 text-center text-6xl font-semibold text-gray-900 mt-4 mb-6 md:mb-4 md:text-4xl md:px-4">
      Beautiful analytics to grow smarter
    </h2>
    <p class="px-5 text-center text-xl font-normal text-gray-600 w768 mx-auto md:text-lg">
      Powerful, self-serve product and growth analytics to help you convert,
      engage, and retain more users. Trusted by over 4,000 startups.
    </p>
    <div class="flex gap-3 justify-center mt-12 mb-16 md:mt-8 md:flex-col md:items-center">
      <RouterLink to="/" class=" md:order-2">
        <WhiteButton class="w-36 py-4 text-lg flex gap-3.5 justify-center md:w-96 md:text-base sm:w-80">
          <img
            src="@/assets/play-circle.svg"
            alt="play"
            height="20"
            width="20"
            class="my-auto h-5 w-5"
          />
          Demo
        </WhiteButton>
      </RouterLink>

      <RouterLink to="/signup">
        <PurpleButton class="px-7 py-4 text-lg md:w-96 sm:w-80 md:text-base"> Sign up </PurpleButton>
      </RouterLink>
    </div>
    <div class="w-10/12 mx-auto md:w-full">
      <div class="bg-gray-900 rounded-xl border-8 border-gray-900  md:mx-auto md:border-4 md:shadow-2xl">
        <img
          src="@/assets/dashboard-mockup.png"
          alt="dashboard-mockup"
          height="810"
          class="w-full bg-gray-900 rounded-xl shadow-gray-900 md:h-56 "
        />
      </div>
      <div
        class="w-10/12 mx-auto flex justify-center h296 items-center flex-col gap-8 absolute z-10 bg-white mt-250 md:relative "
      >
        <p class="text-center text-base font-medium text-gray-600 ">
          Join 4,000+ companies already growing
        </p>
        <div class="flex gap-7 items-center justify-center xl:grid xl:grid-rows-2 xl:grid-flow-col md:grid-rows-3">
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/bolt-circle.svg"
              alt="bolt-circle"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl md:text-lg md:font-semibold">Boltshift</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/box-2.svg"
              alt="light box"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl md:text-lg md:font-semibold">Lightbox</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/feather-dev.svg"
              alt="feather-dev"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl md:text-lg md:font-semibold">FeatherDev</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/spherule.svg"
              alt="spherule"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl md:text-lg md:font-semibold">Spherule</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/global-bank.svg"
              alt="global-bank"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl md:text-lg md:font-semibold">Global Bank</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/Nietz.svg"
              alt="Nietz"
              class="h-11 w-11 bg-orange-500"
            />
            <h5 class="text-gray-900 font-bold text-2xl md:text-lg md:font-semibold">Nietzsche</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PurpleButton from "../PurpleButton.vue";
import WhiteButton from "../WhiteButton.vue";

export default {
  name: "SectionTwo",
  components: {
    PurpleButton,
    WhiteButton,
  },
};
</script>

<style scoped>
.w768 {
  max-width: 768px;
}

.h296 {
  height: 296px;
}

.mt-250 {
  margin-top: -280px;
}

@media (max-width: 767px) {
  .w768 {
    max-width: 100%;
  }
  .h296 {
    height: 100%;
  }
  .mt-250 {
    margin-top: 64px;
  }
}
</style>
