<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-2xl font-semibold text-gray-900">Rewards</h1>
    <div class="flex justify-between items-center">
      <p class="text-gray-800 font-semibold text-base">Points Earned</p>
      <p class="text-gray-800 font-semibold text-base flex gap-2">
        <span>
          <img
            src="../../assets/dashboardIcons/stacked-points.svg"
            alt="coins"
            class="w-6 h-6"
          />
        </span>
        <span>
          {{ pointsBalance }}
        </span>
      </p>
    </div>
    <hr class="border-gray-200" />
    <ul>
      <li v-for="item in rewards" :key="item.reward">
        <div class="flex justify-between mt-2 mb-2">
          <div class="flex flex-col w-40 gap-2">
            <p class="text-gray-900 text-sm font-semibold">{{ item.title }}</p>
            <p class="text-gray-600 text-xs font-medium">
              {{ item.description }}
            </p>
            <p class="text-gray-400 text-xs font-medium">
              Ends {{ item.expiration}}
            </p>
          </div>
          <div class="flex flex-col items-end gap-2">
            <img
              src="../../assets/dashboardIcons/stacked-points.svg"
              alt="coins"
              class="w-4 h-4"
            />
            <p class="text-gray-900 text-xs font-semibold">
              {{ item.points }}
            </p>
          </div>
        </div>
        <hr class="border-gray-100" />
      </li>
    </ul>
    <div class="flex gap-4 items-center justify-center">
      <hr class="border-gray-500 w-20" />
      <p>End</p>
      <hr class="border-gray-500 w-20" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AcctRewards",
  props: {
    data: Object,
    rewards: {
      type: Object,
      default: () => {},
    },
    pointsBalance: {
      type: String,
      default: 0,
    },
  },
};
</script>
