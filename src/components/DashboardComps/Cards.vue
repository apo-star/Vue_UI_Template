<template>
  <div class="flex flex-col gap-8">
    <div
      class="bg-purple-700 rounded-xl p-5 flex flex-col shadow-sm"
      style="width: 344px; height: 290px"
    >
      <div>
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :pagination="{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }"
          :effect="'fade'"
          ref="mySwiper"
        >
          <swiper-slide v-for="(card, index) in cards" :key="index">
            <div
              class="pt-5 px-5 pb-4 flex flex-col justify-between"
              :style="
                'width: 272px; height: 164px; background: ' +
                card.background +
                '; box-shadow: 7.64557px 9.55696px 15.2911px rgba(0, 0, 0, 0.05); border-radius: 20px;'
              "
            >
              <div class="flex justify-between">
                <h4 class="font-semibold text-white text-base">
                  {{ card.title }}
                </h4>
                <img
                  src="@/assets/dashboardIcons/paypass.svg"
                  class="h-6 w-5"
                  alt="paypass"
                />
              </div>
              <div class="flex justify-between items-end">
                <div class="flex flex-col gap-2">
                  <div class="flex justify-between">
                    <h5 class="text-white font-semibold text-xs">
                      {{ user.displayName }}
                    </h5>
                    <h5 class="text-white font-semibold text-xs">
                      {{ card.expiration }}
                    </h5>
                  </div>
                  <h3 class="text-white font-semibold text-sm">
                    {{ card.cardNumber }}
                  </h3>
                </div>
                <div
                  class="h-8 w-11 flex items-center"
                  style="
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3.82278px;
                    padding: 7px;
                  "
                >
                  <img :src="card.icon" alt="" class="mx-auto" />
                </div>
              </div>
            </div>
            <div class="flex justify-between mt-5">
              <p class="text-white text-sm font-medium">{{ card.month }}</p>
              <p class="text-purple-200 text-sm font-normal">
                ${{ card.amount }}
              </p>
            </div>
            <p class="h-2 relative bg-purple-200 rounded mt-2">
              <span
                class="absolute h-2 bg-purple-500 rounded"
                :style="'width: ' + card.progress + '%;'"
              ></span>
            </p>
          </swiper-slide>
        </Swiper>
        <div class="flex flex-col relative mt-5 w-fit">
          <div class="swiper-pagination custom-pagination"></div>
        </div>
      </div>
    </div>

    <div>
      <ul class="flex justify-between w-full">
        <li
          v-for="acctButton in acctButtons"
          :key="acctButton.id"
          @click="activeButton = acctButton"
          class="h-8 text-sm font-semibold cursor-pointer"
          :class="{
            'text-purple-700 border-b-2 border-purple-700': activeButton.id === acctButton.id,
            ' text-gray-900': activeButton.id !== acctButton.id,
          }"
        >
          {{ acctButton.label }}
        </li>
      </ul>

      <component
        :is="activeButton.component"
        :data="activeButton.data"
        :balance="balance"
      ></component>
    </div>
    <p>Active card amount: {{ cards[activeIndex].amount }}</p>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, A11y, Autoplay, Scrollbar } from "swiper";
import AcctBudget from "./AcctBudget.vue";
import AcctOverview from "./AcctOverview.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "Cards",
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },

  components: {
    Swiper,
    SwiperSlide,
    AcctBudget,
    AcctOverview,
  },

  created() {
    this.activeButton = this.acctButtons[0];
  },
  methods: {
    onSwiper(swiper) {
      console.log("Swiper initialized:", swiper);
      this.activeIndex = swiper.activeIndex;
    },
    onSlideChange(swiper) {
      this.activeIndex = swiper.activeIndex;
    },
  },
  setup() {
    const activeIndex = ref(0);
    const cards = ref([
      {
        title: "Untitled",
        background: "linear-gradient(45deg, #42307d 0%, #7f56d9 100%)",
        expiration: "06/25",
        cardNumber: "1234 1234 1234 1234",
        icon: "/src/assets/dashboardIcons/mastercard.svg",
        month: "This month",
        amount: "1,340.40",
        progress: 54,
      },
      {
        title: "Untitled",
        background: "linear-gradient(45deg, #101828 0%, #475467 100%  )",
        expiration: "09/26",
        cardNumber: "5678 5678 5678 5678",
        icon: "/src/assets/dashboardIcons/mastercard.svg",
        month: "This month",
        amount: "1,240.40",
        progress: 54,
      },
      {
        title: "Untitled",
        background: "linear-gradient(45deg, brown 0%, #dc143c 100%)",
        expiration: "07/25",
        cardNumber: "1234 1234 1234 1234",
        icon: "/src/assets/dashboardIcons/mastercard.svg",
        month: "This month",
        amount: "1,240.40",
        progress: 54,
      },
    ]);

    const acctButtons = ref([
      {
        id: 1,
        label: "Overview",
        component: "AcctOverview",
        data: {
          accountNumber: "1234567890",
        },
      },
      {
        id: 2,
        label: "Budget",
        component: "AcctBudget",
        data: {
          budget: "$1,240.40",
          spent: "$1,240.40",
          remaining: "$1,240.40",
        },
      },
    ]);

    const activeButton = ref(acctButtons[0]);
    const mySwiper = ref(null);

    const balance = computed(() => {
      return cards.value[activeIndex.value].amount;
    });

    const onSwiper = (swiper) => {
      mySwiper.value = swiper;
      activeIndex.value = swiper.activeIndex;
      console.log(swiper.activeIndex);
    };

    const onSlideChange = (swiper) => {
      activeIndex.value = swiper.activeIndex;
      console.log("slide change");
      console.log(swiper.activeIndex);
    };
    return {
      activeIndex,
      cards,
      acctButtons,
      activeButton,
      balance,
      onSwiper,
      onSlideChange,
      modules: [Pagination, A11y, Autoplay, Scrollbar],
    };
  },

  computed: {
    ...mapState(["user"]),
    firstName() {
      if (this.user) {
        return this.user.displayName.split(" ")[0];
      }
    },
    activeCard() {
      return this.cards[this.activeIndex];
    },
  },
};
</script>
