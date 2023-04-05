<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between">
      <p class="text-gray-600 text-sm font-medium">Budget this month</p>
      <p class="text-gray-900 font-semibold text-2xl">${{ data.budget }}</p>
    </div>
    <div class="flex justify-between">
      <p class="text-gray-600 text-sm font-medium">Money spent</p>
      <p class="text-gray-900 font-semibold text-2xl">${{ spent }}</p>
    </div>
    <div class="flex justify-between">
      <p class="text-gray-600 text-sm font-medium">
        Money left 
      </p>
      <p class="text-gray-900 font-semibold text-2xl">${{ balance }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "AcctBudget",
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
  },
};
</script>
