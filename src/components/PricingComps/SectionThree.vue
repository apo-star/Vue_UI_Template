<template>
  <div class="py-24 px-28 xl:px-20 lg:flex lg:flex-col lg:items-center md:py-16 md:px-4">
    <div class="flex flex-col gap-5 lg:w-full">
      <h2 class="font-semibold text-4xl text-gray-900 md:text-3xl">FAQs</h2>
      <p class="font-normal text-xl text-gray-600 w768 md:text-lg">
        Everything you need to know about the product and billing. Can’t find
        the answer you’re looking for? Please
        <a href="" class="border-b border-gray-600"> chat to our friendly team</a
        >.
      </p>
    </div>
    <div class="grid grid-rows-2 grid-flow-col xl:grid-rows-3 gap-y-16 justify-between py-16 lg:grid-rows-6 md:flex md:flex-col md:gap-12">
      <div class="flex flex-col gap-2 w-96 lg:w-full ">
        <h5 class="font-medium text-xl text-gray-900 md:text-lg">
          Is there a free trial available?
        </h5>
        <p class="font-normal text-base text-gray-600">
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </p>
      </div>
      <div class="flex flex-col gap-2 w-96 lg:w-full">
        <h5 class="font-medium text-xl text-gray-900 md:text-lg">
          Can other info be added to an invoice?
        </h5>
        <p class="font-normal text-base text-gray-600">
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
        </p>
      </div>
      <div class="flex flex-col gap-2 w-96 lg:w-full">
        <h5 class="font-medium text-xl text-gray-900 md:text-lg">
            Can I change my plan later?
        </h5>
        <p class="font-normal text-base text-gray-600">
            Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
        </p>
      </div>
      <div class="flex flex-col gap-2 w-96 lg:w-full ">
        <h5 class="font-medium text-xl text-gray-900 md:text-lg">
            How does billing work?
        </h5>
        <p class="font-normal text-base text-gray-600">
            Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.
        </p>
      </div>
      <div class="flex flex-col gap-2 w-96 lg:w-full">
        <h5 class="font-medium text-xl text-gray-900 md:text-lg">
            What is your cancellation policy?
        </h5>
        <p class="font-normal text-base text-gray-600">
            We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
        </p>
      </div>
      <div class="flex flex-col gap-2 w-96 lg:w-full">
        <h5 class="font-medium text-xl text-gray-900 md:text-lg">
            How do I change my account email?
        </h5>
        <p class="font-normal text-base text-gray-600">
            You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.
        </p>
      </div>
    </div>
    <div
    class="w-full bg-gray-50 rounded-2xl flex justify-between p-8 lg:flex-col lg:gap-6 md:px-5"
    >
    <div
    class="flex flex-col gap-2"
    >
        <h4
        class="font-semibold text-xl text-gray-900"
        >Still have questions?</h4>
        <p
        class="font-normal text-18 text-gray-600"
        >
            Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
    </div>
    <PurpleButton
    class="w134 h-12 "
    >
        Get in touch
    </PurpleButton>
    </div>
  </div>
</template>

<style scoped>
.w768 {
  width: 768px;
}
.text-18 {
  font-size: 18px;
  line-height: 28px;
}
.w134 {
  width: 134px;
  background-color: #7F56D9;
}

@media (max-width: 1023px) {
  .w768 {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .text-18 {
    font-size: 16px;
    line-height: 24px;
  }
  
}
</style>


<script>
import PurpleButton from '../PurpleButton.vue';

export default {
  name: 'SectionThree',
  components: {
    PurpleButton,
  },
};
</script>