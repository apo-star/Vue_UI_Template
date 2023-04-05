<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between">
      <p class="text-gray-800 font-semibold text-base">Categories</p>
      <p class="text-gray-800 font-semibold text-base">Total spending</p>
    </div>
    <hr class="border-gray-200" />
    <ul>
      <li v-for="item in spendingBreakdown" :key="item.category">
        <div class="flex justify-between mt-2">
          <p class="text-gray-600 text-sm font-medium">{{ item.category }}</p>
          <p class="text-gray-900 font-semibold text-base">${{ item.amount }}</p>
        </div>
      </li>
    </ul>
    <hr class="border-gray-200" />
    <div class="flex justify-between mt-2">
        <p class="text-gray-600 text-lg font-medium">Total Spent</p>
        <p class="text-gray-900 font-semibold text-lg">${{ spent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcctSpending",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    balance: {
      type: String,
      default: 0,
    },
    spent: {
      type: String,
      default: 0,
    },
    spendingBreakdown: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
