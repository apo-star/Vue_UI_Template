<template>
  <div class="py-24 px-28 md:py-16 md:px-4">
    <div class="mb-24 md:mb-16">
      <p class="text-base font-semibold text-violet-700 md:text-sm">Pricing</p>
      <h1 class="text-5xl font-semibold text-gray-900 mt-3 mb-6 md:text-4xl md:mb-4">
        Simple, transparent pricing
      </h1>
      <p class="text-xl font-normal text-gray-600 md:text-lg">
        We believe Untitled should be accessible to all companies, no matter the
        size.
      </p>
    </div>
    <div class="flex gap-8 flex-row justify-between xl:flex-col xl:justify-center xl:items-center xl:gap-12 md:gap-4">
      <div
        class="p-8 w-fit shadow-lg border-gray-200 border-solid border rounded-2xl text-center md:px-6"
      >
        <h1 class="mt-2 mb-4 font-semibold text-5xl text-gray-900 md:text-4xl">$10/mth</h1>
        <h3 class="text-xl font-semibold text-gray-900">Basic plan</h3>
        <p class="text-base font-normal text-gray-600 mt-1 mb-8">
          Billed anually.
        </p>
        <div class="gap-4 flex flex-col">
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Access to all basic features
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Basic reporting and analytics
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Up to 10 individual users
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              20GB individual data each user
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Basic chat and email support
            </p>
          </div>
        </div>
        <div class="mt-10 flex flex-col gap-3">
          <PurpleButton
            class=" w-80 h-12 "
          >
            Get started
          </PurpleButton>
          <WhiteButton
            class="w-80 h-12 "
          >
            Chat to sales
          </WhiteButton>
        </div>
      </div>
      <div
        class="p-8 w-fit shadow-lg border-gray-200 border-solid border rounded-2xl text-center md:px-6"
      >
        <h1 class="mt-2 mb-4 font-semibold text-5xl text-gray-900 md:text-4xl">$20/mth</h1>
        <h3 class="text-xl font-semibold text-gray-900">Business plan</h3>
        <p class="text-base font-normal text-gray-600 mt-1 mb-8">
          Billed anually.
        </p>
        <div class="gap-4 flex flex-col">
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">200+ integrations</p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Advanced reporting and analytics
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Up to 20 individual users
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              40GB individual data each user
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Priority chat and email support
            </p>
          </div>
        </div>
        <div class="mt-10 flex flex-col gap-3">
          <PurpleButton
            class=" w-80 h-12 "
          >
            Get started
          </PurpleButton>
          <WhiteButton
            class="w-80 h-12 "
          >
            Chat to sales
          </WhiteButton>
        </div>
      </div>
      <div
        class="p-8 w-fit shadow-lg border-gray-200 border-solid border rounded-2xl text-center md:px-6"
      >
        <h1 class="mt-2 mb-4 font-semibold text-5xl text-gray-900 md:text-4xl">$40/mth</h1>
        <h3 class="text-xl font-semibold text-gray-900">Enterprise plan</h3>
        <p class="text-base font-normal text-gray-600 mt-1 mb-8">
          Billed anually.
        </p>
        <div class="gap-4 flex flex-col">
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Advanced custom fields
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Audit log and data history
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Unlimited individual users
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Unlimited individual data
            </p>
          </div>
          <div class="flex gap-3">
            <img
              src="@/assets/marked.svg"
              height="24"
              width="24"
              class="bg-emerald-100 rounded-full ptwo"
              alt=""
            />
            <p class="text-base font-normal text-gray-600">
              Personalised+priotity service
            </p>
          </div>
        </div>
        <div class="mt-10 flex flex-col gap-3">
          <PurpleButton
            class=" w-80 h-12 "
          >
            Get started
          </PurpleButton>
          <WhiteButton
            class="w-80 h-12 "
          >
            Chat to sales
          </WhiteButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ptwo {
  padding: 2px;
}
</style>

<script>
import PurpleButton from "../PurpleButton.vue";
import WhiteButton from "../WhiteButton.vue";

export default {
  name: "Pricing",
  components: {
    PurpleButton,
    WhiteButton,
  },
};


</script>
