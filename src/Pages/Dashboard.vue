<template>
  <DashboardLayout>
    <template v-slot:dashboard-contents>
      <div class="flex w-full">
        <div class="pt-8 px-8 flex flex-col gap-8 flex-grow">
          <div class="flex justify-between">
            <h2 class="text-gray-900 text-3xl font-semibold">
              Welcome back, {{ firstName }}
            </h2>
            <div class="flex gap-3">
              <WhiteButtonVue
                class="h-10 w-28 text-gray-700 font-semibold text-sm"
                >$ Deposit
              </WhiteButtonVue>
              <PurpleButton class="h-10 w-28 text-white font-semibold text-sm">
                Send funds
              </PurpleButton>
            </div>
          </div>
          <div
            class="border border-gray-200 p-6 rounded-xl gap-8 flex flex-col shadow-sm"
          >
            <div class="flex flex-col gap-3.5">
              <div class="flex justify-between">
                <p class="text-gray-900 font-semibold text-lg">Total balance</p>
                <WhiteButtonVue
                  class="h-10 w-28 text-gray-700 font-semibold text-sm"
                >
                  View Report
                </WhiteButtonVue>
              </div>
              <div class="flex gap-4 items-center">
                <h3 class="text-gray-900 text-3xl font-semibold">
                  $107,843.82
                </h3>
                <p
                  class="flex items-center justify-center w-16 h-6 bg-green-50 rounded-2xl"
                >
                  <img
                    src="../assets/dashboardIcons/arrow-up.svg"
                    class="h-4 w-4"
                    alt=""
                  />
                  <span class="text-green-700 font-medium text-sm"> 7.2% </span>
                </p>
              </div>
            </div>
            <h3 class="font-semibold text-gray-900 text-lg">
              Balance over time
            </h3>
            <div class="flex flex-col gap-2 relative">
              <div class="flex flex-col gap-8">
                <hr class="w-full text-gray-100" />
                <hr class="w-full text-gray-100" />
                <hr class="w-full text-gray-100" />
                <hr class="w-full text-gray-100" />
                <hr class="w-full text-gray-100" />
                <hr class="w-full text-gray-100" />
              </div>
              <div class="flex justify-between items-center">
                <p class="text-gray-600 text-xs font-normal">Jan</p>
                <p class="text-gray-600 text-xs font-normal">Feb</p>
                <p class="text-gray-600 text-xs font-normal">Mar</p>
                <p class="text-gray-600 text-xs font-normal">Apr</p>
                <p class="text-gray-600 text-xs font-normal">May</p>
                <p class="text-gray-600 text-xs font-normal">Jun</p>
                <p class="text-gray-600 text-xs font-normal">Jul</p>
                <p class="text-gray-600 text-xs font-normal">Aug</p>
                <p class="text-gray-600 text-xs font-normal">Sep</p>
                <p class="text-gray-600 text-xs font-normal">Oct</p>
                <p class="text-gray-600 text-xs font-normal">Nov</p>
                <p class="text-gray-600 text-xs font-normal">Dec</p>
              </div>
              <div
                class="absolute flex justify-between items-center bottom-6 w-full"
              >
                <div class="flex flex-col w-8 relative">
                  <span class="h-12 bg-purple-700 rounded-t-lg z-30"></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 90px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 126px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span
                    class="bg-purple-700 rounded-t-lg z-30"
                    style="height: 60px"
                  ></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 112px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 158px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span class="h-9 bg-purple-700 rounded-t-lg z-30"></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 66px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 94px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span
                    class="bg-purple-700 rounded-t-lg z-30"
                    style="height: 50px"
                  ></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 95px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 134px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span class="h-9 bg-purple-700 rounded-t-lg z-30"></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 66px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 94px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span class="h-14 bg-purple-700 rounded-t-lg z-30"></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 107px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 150px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span class="h-12 bg-purple-700 rounded-t-lg z-30"></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 90px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 126px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span
                    class="bg-purple-700 rounded-t-lg z-30"
                    style="height: 50px"
                  ></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 95px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 134px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span class="h-12 bg-purple-700 rounded-t-lg z-30"></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 90px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 126px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span class="h-14 bg-purple-700 rounded-t-lg z-30"></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 101px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 142px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span
                    class="bg-purple-700 rounded-t-lg z-30"
                    style="height: 60px"
                  ></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 112px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 158px"
                  ></span>
                </div>
                <div class="flex flex-col w-8 relative">
                  <span class="h-11 bg-purple-700 rounded-t-lg z-30"></span>
                  <span
                    class="bg-purple-500 rounded-t-lg absolute bottom-0 w-8 z-20"
                    style="height: 84px"
                  ></span>
                  <span
                    class="bg-purple-300 rounded-t-lg absolute bottom-0 w-8"
                    style="height: 118px"
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <BalanceSplit />
          <Transaction />
        </div>
        <div
          class="flex flex-col gap-8 flex-grow-0 border-l border-gray-200 p-6 min-h-screen"
          style="width: 392px; background-color: #fcfcfd"
        >
          <div class="flex justify-between">
            <h3 class="text-gray-900 font-semibold text-lg">Your cards</h3>
            <button>
              <img
                src="../assets/dashboardIcons/dots-vertical.svg"
                class="h-3.5"
                alt="menu"
              />
            </button>
          </div>
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import WhiteButtonVue from "../components/WhiteButton.vue";
import PurpleButton from "../components/PurpleButton.vue";
import Cards from "../components/DashboardComps/Cards.vue";
import BalanceSplit from "../components/DashboardComps/BalanceSplit.vue";
import Transaction from "../components/DashboardComps/Transaction.vue";
import { mapState } from "vuex";

export default {
  components: {
    DashboardLayout,
    WhiteButtonVue,
    PurpleButton,
    Cards,
    BalanceSplit,
    Transaction,
  },

  setup() {},

  computed: {
    ...mapState(["user"]),
    firstName() {
      if (this.user) {
        return this.user.displayName.split(" ")[0];
      }
    },
  },
  
};
</script>

<style scoped></style>
