<template>
  <div class="pt-24 px-28r pb-5">
    <h4
      class="text-center text-purple-700 font-medium text-sm bg-purple-50 w-fit flex rounded-2xl mx-auto p-1 gap-3"
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
    <h2 class="text-center text-6xl font-semibold text-gray-900 mt-4 mb-6">
      Beautiful analytics to grow smarter
    </h2>
    <p class="text-center text-xl font-normal text-gray-600 w768 mx-auto">
      Powerful, self-serve product and growth analytics to help you convert,
      engage, and retain more users. Trusted by over 4,000 startups.
    </p>
    <div class="flex gap-3 justify-center mt-12 mb-16">
      <RouterLink to="/">
        <WhiteButton class="w-36 py-4 text-lg flex gap-3.5 justify-center">
          <img
            src="@/assets/play-circle.svg"
            alt="play"
            height="20"
            width="20"
            class="my-auto"
          />
          Demo
        </WhiteButton>
      </RouterLink>

      <RouterLink to="/signup">
        <PurpleButton class="px-7 py-4 text-lg"> Sign up </PurpleButton>
      </RouterLink>
    </div>
    <div class="w-10/12 mx-auto">
      <div class="bg-gray-900 rounded-xl border-8 border-gray-900">
        <img
          src="@/assets/dashboard-mockup.png"
          alt="dashboard-mockup"
          height="810"
          class="w-full bg-gray-900 rounded-xl shadow-gray-900"
        />
      </div>
      <div
        class="w-10/12 mx-auto flex justify-center h296 items-center flex-col gap-8 absolute z-10 bg-white mt-250"
      >
        <p class="text-center text-base font-medium text-gray-600">
          Join 4,000+ companies already growing
        </p>
        <div class="flex gap-7 items-center justify-center">
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/bolt-circle.svg"
              alt="bolt-circle"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl">Boltshift</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/box-2.svg"
              alt="light box"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl">Lightbox</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/feather-dev.svg"
              alt="feather-dev"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl">FeatherDev</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/spherule.svg"
              alt="spherule"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl">Spherule</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/global-bank.svg"
              alt="global-bank"
              class="h-11 w-11"
            />
            <h5 class="text-gray-900 font-bold text-2xl">Global Bank</h5>
          </a>
          <a href="" class="flex gap-2 items-center">
            <img
              src="@/assets/homeIcons/Nietz.svg"
              alt="Nietz"
              class="h-11 w-11 bg-orange-500"
            />
            <h5 class="text-gray-900 font-bold text-2xl">Nietzsche</h5>
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
</style>
