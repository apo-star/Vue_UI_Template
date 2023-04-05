<template>
  <div class="flex justify-between ">
    <div
      class="rounded-xl bg-purple-600 h-52 shadow-sm p-4 flex flex-col gap-6"
    >
      <div class="bg-purple-100 h-10 w-10 rounded-lg items-center flex">
        <img
          src="../../assets/dashboardIcons/home-smile.svg"
          class="h-4 mx-auto w-4"
          alt=""
        />
      </div>
      <div
        style="
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px);
        "
        class="rounded-lg p-4 flex flex-col gap-4"
      >
        <div class="flex flex-col gap-1">
          <h4 class="text-white font-medium text-sm">Home deposit</h4>
          <h2 class="text-white text-2xl font-semibold">$64,240.60</h2>
        </div>
        <div class="h-2 w-56 bg-white relative rounded">
          <span class="absolute bg-purple-600 h-full w-32 rounded"></span>
        </div>
      </div>
    </div>
    <div class="rounded-xl bg-green-600 h-52 shadow-sm p-4 flex flex-col gap-6">
      <div class="bg-purple-100 h-10 w-10 rounded-lg items-center flex">
        <img
          src="../../assets/dashboardIcons/umbrella-round.svg"
          class="h-4 mx-auto w-4"
          alt=""
        />
      </div>
      <div
        style="
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px);
        "
        class="rounded-lg p-4 flex flex-col gap-4"
      >
        <div class="flex flex-col gap-1">
          <h4 class="text-white font-medium text-sm">Holiday</h4>
          <h2 class="text-white text-2xl font-semibold">$2,220.42</h2>
        </div>
        <div class="h-2 w-56 bg-white relative rounded">
          <span class="absolute bg-green-600 h-full w-52 rounded"></span>
        </div>
      </div>
    </div>
    <div class="rounded-xl bg-blue-600 h-52 shadow-sm p-4 flex flex-col gap-6">
      <div class="bg-purple-100 h-10 w-10 rounded-lg items-center flex">
        <img
          src="../../assets/dashboardIcons/coins-stacked.svg"
          class="h-4 mx-auto w-4"
          alt=""
        />
      </div>
      <div
        style="
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px);
        "
        class="rounded-lg p-4 flex flex-col gap-4"
      >
        <div class="flex flex-col gap-1">
          <h4 class="text-white font-medium text-sm">Savings</h4>
          <h2 class="text-white text-2xl font-semibold">$41,382.80</h2>
        </div>
        <div class="h-2 w-56 bg-white relative rounded">
          <span class="absolute bg-blue-600 h-full w-36 rounded"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BalanceSplit",
};
</script>
