<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between">
      <p class="text-gray-600 text-sm font-medium">Current balance</p>
      <p class="text-gray-900 font-semibold text-2xl">${{ balance }}</p>
    </div>
    <div class="flex justify-between">
      <p class="text-gray-600 text-sm font-medium">Current limit</p>
      <p class="text-gray-900 font-semibold text-2xl">
        ${{ data.currentLimit }}
      </p>
    </div>
    <div class="flex justify-between">
      <p class="text-gray-600 text-sm font-medium">Budget this month</p>
      <p class="text-gray-900 font-semibold text-2xl">${{ data.budget }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcctOverview",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    balance: {
      type: String,
      default: 0,
    },
  },
};
</script>
