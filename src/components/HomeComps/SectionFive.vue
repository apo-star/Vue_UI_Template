<template>
  <div class="py-24 px-28 flex flex-col gap-16 md:py-16 md:px-4 md:gap-12">
    <div>
      <h3 class="text-4xl font-semibold text-gray-900 text-center md:text-3xl">
        Frequently asked questions
      </h3>
      <p class="text-xl font-normal text-gray-600 text-center mt-5 md:mt-4 md:text-lg">
        Everything you need to know about the product and billing.
      </p>
    </div>

    <div class="flex flex-col w766 mx-auto">
      <div
        class="flex justify-between hover:cursor-pointer transition duration-500 ease-in-out"
        @click="toggleAnswer(0)"
      >
        <h4 class="text-lg font-medium text-gray-900">
          Is there a free trial available?
        </h4>
        <img
          :src="showAnswer[0] ? minusImage : plusImage"
          alt="plus-circle"
          class="h-5 w-5 transform transition-transform duration-500"
          :class="{ 'rotate-0': showAnswer[0], '-rotate-90': !showAnswer[0] }"
        />
      </div>
      <div
        v-if="showAnswer[0]"
        class="mt-2 hover:cursor-pointer transition duration-500 ease-in-out"
        @click="toggleAnswer(0)"
      >
        <p class="text-gray-600 text-base font-normal w720 md:pr-2.5 transition duration-500 ease-in-out">
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </p>
      </div>
      <p class="bg-gray-200 h-px my-7 w720"></p>
      <div
        class="flex justify-between hover:cursor-pointer transition duration-500 ease-in-out"
        @click="toggleAnswer(1)"
      >
        <h4 class="text-lg font-medium text-gray-900">
          Can I change my plan later?
        </h4>
        <img
          :src="showAnswer[1] ? minusImage : plusImage"
          alt="plus-circle"
          class="h-5 w-5 transform transition-transform duration-500"
          :class="{ 'rotate-0': showAnswer[1], '-rotate-90': !showAnswer[1] }"
        />
      </div>
      <div
        v-if="showAnswer[1]"
        class="mt-2 hover:cursor-pointer"
        @click="toggleAnswer(1)"
      >
        <p class="text-gray-600 text-base font-normal w720 md:pr-2.5">
          Yes, you can change your plan at any time. Simply log in to your
          account and select the plan you want to switch to.
        </p>
      </div>
      <p class="bg-gray-200 h-px my-7 w720"></p>
      <div
        class="flex justify-between hover:cursor-pointer"
        @click="toggleAnswer(2)"
      >
        <h4 class="text-lg font-medium text-gray-900">
          What is your cancellation policy?
        </h4>
        <img
          :src="showAnswer[2] ? minusImage : plusImage"
          alt="plus-circle"
          class="h-5 w-5 transform transition-transform duration-500"
          :class="{ 'rotate-0': showAnswer[2], '-rotate-90': !showAnswer[2] }"
        />
      </div>
      <div
        v-if="showAnswer[2]"
        class="mt-2 hover:cursor-pointer"
        @click="toggleAnswer(2)"
      >
        <p class="text-gray-600 text-base font-normal w720 md:pr-2.5">
          Yes, you can change your plan at any time. Simply log in to your
          account and select the plan you want to switch to.
        </p>
      </div>
      <p class="bg-gray-200 h-px my-7 w720"></p>
      <div
        class="flex justify-between hover:cursor-pointer"
        @click="toggleAnswer(3)"
      >
        <h4 class="text-lg font-medium text-gray-900">
          Can other info be added to an invoice?
        </h4>
        <img
          :src="showAnswer[3] ? minusImage : plusImage"
          alt="plus-circle"
          class="h-5 w-5 transform transition-transform duration-500"
          :class="{ 'rotate-0': showAnswer[3], '-rotate-90': !showAnswer[3] }"
        />
      </div>
      <div
        v-if="showAnswer[3]"
        class="mt-2 hover:cursor-pointer"
        @click="toggleAnswer(3)"
      >
        <p class="text-gray-600 text-base font-normal w720 md:pr-2.5">
          Yes, you can change your plan at any time. Simply log in to your
          account and select the plan you want to switch to.
        </p>
      </div>
      <p class="bg-gray-200 h-px my-7 w720"></p>
      <div
        class="flex justify-between hover:cursor-pointer"
        @click="toggleAnswer(4)"
      >
        <h4 class="text-lg font-medium text-gray-900">
          How does billing work?
        </h4>
        <img
          :src="showAnswer[4] ? minusImage : plusImage"
          alt="plus-circle"
          class="h-5 w-5 transform transition-transform duration-500"
          :class="{ 'rotate-0': showAnswer[4], '-rotate-90': !showAnswer[4] }"
        />
      </div>
      <div
        v-if="showAnswer[4]"
        class="mt-2 hover:cursor-pointer"
        @click="toggleAnswer(4)"
      >
        <p class="text-gray-600 text-base font-normal w720 md:pr-2.5">
          Yes, you can change your plan at any time. Simply log in to your
          account and select the plan you want to switch to.
        </p>
      </div>
      <p class="bg-gray-200 h-px my-7 w720"></p>
      <div
        class="flex justify-between hover:cursor-pointer"
        @click="toggleAnswer(5)"
      >
        <h4 class="text-lg font-medium text-gray-900">
          How do I change my account email?
        </h4>
        <img
          :src="showAnswer[5] ? minusImage : plusImage"
          alt="plus-circle"
          class="h-5 w-5 transform transition-transform duration-500"
          :class="{ 'rotate-0': showAnswer[5], '-rotate-90': !showAnswer[5] }"
        />
      </div>
      <div
        v-if="showAnswer[5]"
        class="mt-2 hover:cursor-pointer"
        @click="toggleAnswer(5)"
      >
        <p class="text-gray-600 text-base font-normal w720 md:pr-2.5">
          Yes, you can change your plan at any time. Simply log in to your
          account and select the plan you want to switch to.
        </p>
      </div>
    </div>
    <div
      class="py-8 bg-gray-50 w-full flex flex-col justify-center gap-8 rounded-2xl md:gap-6"
    >
      <div class="flex justify-around items-center gap-6 w-120 mx-auto pt-2">
        <img
          src="@/assets/homeIcons/alek.png"
          alt="alec"
          class="w-12 h-12 alec rounded-full"
        />
        <img
          src="@/assets/homeIcons/olivia.png"
          alt="olivia"
          class="w-14 h-14 mb-2 olivia rounded-full"
          style="position: absolute; z-index: 1"
        />
        <img
          src="@/assets/homeIcons/lori.png"
          alt="lori"
          class="w-12 h-12 lori rounded-full"
        />
      </div>

      <div>
        <h3 class="text-xl font-semibold text-gray-900 text-center mb-2">
          Still have questions?
        </h3>
        <p class="text-gray-600 text-lg font-normal text-center md:text-base">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
      </div>
      <PurpleButton
      class="h-12 w-32 px-1.5 mx-auto"
      >
        Get in touch
      </PurpleButton>
    </div>
  </div>
  <p class="bg-gray-200 h-px  mx-28 md:mx-4"></p>
</template>

<style scoped>
.w766 {
  width: 766px;
}
.w720 {
  width: 720px;
}
.w120 {
  width: 120px;
}
.alec {
  background-color: #abb677;
  border: 1.5px solid #ffffff;
}
.olivia {
  background-color: #C7B9DA;
  border: 1.5px solid #ffffff;
}
.lori {
  background-color: #D9B9BB;
  border: 1.5px solid #ffffff;
}

@media (max-width: 1023px) {
  .w766 {
    width: 100%;
  }
  .w720 {
    width: 100%;
  }
  .w120 {
    width: 100%;
  }
}
</style>

<script>
import PlusCircle from "@/assets/homeIcons/plus-circle.svg";
import MinusCircle from "@/assets/homeIcons/minus-circle.svg";
import PurpleButton from "../PurpleButton.vue";

export default {
    name: "SectionFive",
    components: {
        PurpleButton,
    },
  data() {
    return {
      showAnswer: [false, false],
      plusImage: PlusCircle,
      minusImage: MinusCircle,
    };
  },
  methods: {
    toggleAnswer(index) {
      this.showAnswer[index] = !this.showAnswer[index];
    },
  },
};
</script>
