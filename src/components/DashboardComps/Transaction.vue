<template>
  <div
    class="border border-gray-200 shadow-sm rounded-xl pt-5 pb-4 flex flex-col"
  >
    <div class="pb-5 px-6 border-b-gray-200 border-b">
      <h3 class="text-gray-900 font-semibold text-lg">Recent transactions</h3>
    </div>
    <div>
      <table class="table-auto w-full text-left">
        <thead>
          <tr
            class="border-b-gray-200 border-b font-medium text-xs text-gray-600"
          >
            <th class="py-3.5 pl-6">Transaction</th>
            <th class="py-3.5 pl-6">Amount</th>
            <th class="py-3.5 pl-6">Date</th>
            <th class="py-3.5 pl-6">Category</th>
            <th class="py-3.5 pl-6">Account</th>
          </tr>
        </thead>
        <tbody v-for="(transaction, index) in transactions" :key="index">
          <tr class="border-b-gray-200 border-b pb-0" style="height: 72px">
            <td class="py-4 pl-6 flex gap-3 items-center">
              <span v-if="transaction.icon">
                <img
                  :src="transaction.icon"
                  alt="icon"
                  class="inline-block h-10 w-10 rounded-full"
                />
              </span>
              <span
                v-else
                class="h-10 w-10 rounded-full text-center bg-gray-100 font-medium text-base text-gray-600 flex items-center justify-center"
              >
                {{ transaction.initial }}
              </span>
              <span class="font-gray-900 text-sm font-medium">
                {{ transaction.label }}
              </span>
            </td>
            <td
              class="pl-6 font-normal text-sm"
              :class="
                transaction.amount.includes('-')
                  ? 'text-gray-600'
                  : 'text-green-600'
              "
            >
              {{ transaction.amount }}
            </td>
            <td class="pl-6 text-gray-600 text-sm font-normal">
              {{ transaction.date }}
            </td>
            <td class="pl-6">
              <span
                class="py-0.5 pr-2 pl-1.5 flex gap-2 max-w-max rounded-2xl items-center"
                :style="{ backgroundColor: transaction.background }"
              >
                <span
                  class="block h-1.5 w-1.5 rounded-full"
                  :style="{ backgroundColor: transaction.color }"
                ></span>

                <span
                  class="font-medium text-xs"
                  :style="{ color: transaction.color }"
                >
                  {{ transaction.category }}
                </span>
              </span>
            </td>
            <td class="pl-6">
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-8 border border-gray-100 rounded-md flex items-center"
                >
                  <img
                    :src="transaction.account[0].icon"
                    alt="icon"
                    class="inline-block h-7 w-8 m-auto"
                  />
                </div>
                <div>
                  <h4 class="font-normal text-sm text-gray-900">
                    {{ transaction.account[0].name }}
                  </h4>
                  <h4 class="text-gray-600 font-normal text-sm">
                    Expiry {{ transaction.account[0].expiry }}
                  </h4>
                </div>
              </div>
            </td>
            <td>
              <TransactionEdit :transaction="transaction" :index="index" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TransactionEdit from "./TransactionEdit.vue";
import { ref, computed } from "vue";
export default {
  name: "Transaction",
  components: {
    TransactionEdit,
  },
  props: {
    transactions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      transactions: [
        {
          id: 1,
          label: "Spotify",
          amount: "- $18.99",
          date: "Wed 1:00pm",
          icon: "/src/assets/dashboardIcons/spotify.svg",
          initial: "S",
          category: "Subscriptions",
          color: "#175CD3",
          background: "#EFF8FF",
          account: [
            {
              name: "Visa 5678",
              expiry: "09/2026",
              icon: "/src/assets/dashboardIcons/visa.svg",
            },
          ],
        },
        {
          id: 2,
          label: "A Coffee",
          amount: "- $4.50",
          date: "Wed 7:20am",
          icon: null,
          initial: "AC",
          category: "Food and dining",
          color: "#C11574",
          background: "#FDF2FA",
          account: [
            {
              name: "Visa 5678",
              expiry: "09/2026",
              icon: "/src/assets/dashboardIcons/visa.svg",
            },
          ],
        },
        {
          id: 3,
          label: "Stripe",
          amount: "+ $88.00",
          date: "Wed 2:45am",
          icon: "/src/assets/dashboardIcons/stripe.svg",
          initial: "S",
          category: "Income",
          color: "#027A48",
          background: "#ECFDF3",
          account: [
            {
              name: "Mastercard 1234",
              expiry: "06/2025",
              icon: "/src/assets/dashboardIcons/mastercard.svg",
            },
          ],
        },
        {
          id: 4,
          label: "Figma",
          amount: "- $15.00",
          date: "Tue 6:10pm",
          icon: "/src/assets/dashboardIcons/figma.svg",
          initial: "F",
          category: "Subscriptions",
          color: "#175CD3",
          background: "#EFF8FF",
          account: [
            {
              name: "Visa 5678",
              expiry: "09/2026",
              icon: "/src/assets/dashboardIcons/visa.svg",
            },
          ],
        },
        {
          id: 5,
          label: "TBF Bakery",
          amount: "- $12.50",
          date: "Tue 7:52am",
          icon: null,
          initial: "TB",
          category: "Food and dining",
          color: "#C11574",
          background: "#FDF2FA",
          account: [
            {
              name: "Visa 5678",
              expiry: "09/2026",
              icon: "/src/assets/dashboardIcons/visa.svg",
            },
          ],
        },
        {
          id: 6,
          label: "Fresh F&V",
          amount: "- $40.20",
          date: "Tue 12:15pm",
          icon: null,
          initial: "FV",
          category: "Groceries",
          color: "#175CD3",
          background: "#EFF8FF",
          account: [
            {
              name: "Visa 5678",
              expiry: "09/2026",
              icon: "/src/assets/dashboardIcons/visa.svg",
            },
          ],
        },
        {
          id: 7,
          label: "Stripe",
          amount: "+ $88.00",
          date: "Tue 5:40am",
          icon: "/src/assets/dashboardIcons/stripe.svg",
          initial: "S",
          category: "Income",
          color: "#027A48",
          background: "#ECFDF3",
          account: [
            {
              name: "Mastercard 1234",
              expiry: "06/2025",
              icon: "/src/assets/dashboardIcons/mastercard.svg",
            },
          ],
        },
      ],
    };
  },
};
</script>
