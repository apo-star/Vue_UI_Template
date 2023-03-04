<template>
  <div class="py-24 px-28 flex flex-col gap-16 md:py-16 md:px-4 md:gap-12">
    <div>
      <p class="text-base font-semibold text-purple-700 md:text-sm">
        Launch faster
      </p>
      <h2 class="text-4xl font-semibold text-gray-900 mt-3 mb-5 md:mb-4 md:text-3xl">
        Build something great
      </h2>
      <p class="text-xl font-normal text-gray-600 w-768 md:text-lg">
        We’ve done all the heavy lifting so you don’t have to — get all the data
        you need to launch and grow your business faster.
      </p>
    </div>
    <div class=" w-full flex justify-center gap-24 lg:flex-col md:gap-12">
      <div
      class="grid grid-rows-2 grid-flow-col gap-8 gap-y-16 justify-center items-center md:flex md:flex-col md:gap-y-8"
      >
        <div
        class=" w-64  text-center"
        >
            <h3
                class="text-6xl font-semibold text-purple-600 md:text-5xl"
            >
                400+
            </h3>
            <h5
                class="text-lg font-semibold text-gray-900  mt-3 mb-2"
            >
                Projects completed
            </h5>
            <p
                class="text-base font-normal text-gray-600 "
            >
                We’ve helped build over 400 amazing projects.
            </p>
        </div>
        <div
        class=" w-64 text-center"
        >
            <h3
                class="text-6xl font-semibold text-purple-600 md:text-5xl"
            >
            10k
            </h3>
            <h5
                class="text-lg font-semibold text-gray-900  mt-3 mb-2"
            >
            Global downloads
            </h5>
            <p
                class="text-base font-normal text-gray-600 "
            >
            Our free UI kit has been downloaded over 10k times.
            </p>
        </div>
        <div
        class=" w-64  text-center"
        >
            <h3
                class="text-6xl font-semibold text-purple-600 md:text-5xl"
            >
            600%
            </h3>
            <h5
                class="text-lg font-semibold text-gray-900  mt-3 mb-2"
            >
            Return on investment
            </h5>
            <p
                class="text-base font-normal text-gray-600 "
            >
            Our customers have reported an average of ~600% ROI.
            </p>
        </div>
        <div
        class=" w-64 text-center"
        >
            <h3
                class="text-6xl font-semibold text-purple-600 md:text-5xl"
            >
            200+
            </h3>
            <h5
                class="text-lg font-semibold text-gray-900  mt-3 mb-2"
            >
            5-star reviews
            </h5>
            <p
                class="text-base font-normal text-gray-600 "
            >
            We’re proud of our 5-star rating with over 200 reviews.
            </p>
        </div>
      </div>
      <img src="@/assets/homeIcons/metrics.png" alt="" class="h560 w560"/>
    </div>
  </div>
</template>

<style scoped>
.w-768 {
  width: 768px;
}
.h560 {
  height: 560px;
}

.w560 {
  width: 560px;
}

@media (max-width: 1023px) {
  .w-768 {
    width: 100%;
  }

  .w560 {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .h560 {
    height: 240px;
  }
}
</style>
