<template>
  <div
    class="pt-16 px-28 xl:px-20 pb-12 flex flex-col gap-16 md:py-12 md:px-4 md:gap-12"
  >
    <div
      class="flex flex-row justify-between lg:grid lg:grid-cols-4 lg:grid-flow-row lg:gap-y-10 md:grid-cols-2 md:gap-y-8"
    >
      <div class="w-44 flex flex-col gap-4">
        <h6 class="font-semibold text-sm text-gray-500 uppercase">Product</h6>
        <div class="flex flex-col gap-3">
          <a href="" class="font-semibold text-base text-gray-600">Overview</a>
          <a href="" class="font-semibold text-base text-gray-600">Features</a>
          <a href="" class="flex flex-row gap-2 items-center">
            <p class="font-semibold text-base text-gray-600">Solutions</p>
            <p
              class="text-green-600 font-medium text-xs bg-green-50 w-10 h-5 rounded-2xl flex justify-center items-center px-2 py-1"
            >
              New
            </p>
          </a>
          <RouterLink
            to="/pricing"
            class="font-semibold text-base text-gray-600"
            >Pricing</RouterLink
          >
          <a href="" class="font-semibold text-base text-gray-600">Tutorials</a>
          <a href="" class="font-semibold text-base text-gray-600">Releases</a>
        </div>
      </div>
      <div class="w-44 flex flex-col gap-4">
        <h6 class="font-semibold text-sm text-gray-500 uppercase">Company</h6>
        <div class="flex flex-col gap-3">
          <a href="" class="font-semibold text-base text-gray-600">About us</a>
          <a href="" class="font-semibold text-base text-gray-600">Careers</a>
          <a href="" class="font-semibold text-base text-gray-600">Press</a>
          <a href="" class="font-semibold text-base text-gray-600">News</a>
          <a href="" class="font-semibold text-base text-gray-600">Media kit</a>
          <a href="" class="font-semibold text-base text-gray-600">Contact</a>
        </div>
      </div>
      <div class="w-44 flex flex-col gap-4">
        <h6 class="font-semibold text-sm text-gray-500 uppercase">Resources</h6>
        <div class="flex flex-col gap-3">
          <a href="" class="font-semibold text-base text-gray-600">Blog</a>
          <a href="" class="font-semibold text-base text-gray-600"
            >Newsletter</a
          >
          <a href="" class="font-semibold text-base text-gray-600">Events</a>
          <a href="" class="font-semibold text-base text-gray-600"
            >Help centre</a
          >
          <a href="" class="font-semibold text-base text-gray-600">Tutorials</a>
          <a href="" class="font-semibold text-base text-gray-600">Support</a>
        </div>
      </div>
      <div class="w-44 flex flex-col gap-4">
        <h6 class="font-semibold text-sm text-gray-500 uppercase">Use cases</h6>
        <div class="flex flex-col gap-3">
          <a href="" class="font-semibold text-base text-gray-600">Startups</a>
          <a href="" class="font-semibold text-base text-gray-600"
            >Enterprise</a
          >
          <a href="" class="font-semibold text-base text-gray-600"
            >Government</a
          >
          <a href="" class="font-semibold text-base text-gray-600"
            >SaaS centre</a
          >
          <a href="" class="font-semibold text-base text-gray-600"
            >Marketplaces</a
          >
          <a href="" class="font-semibold text-base text-gray-600">Ecommerce</a>
        </div>
      </div>
      <div class="w-44 flex flex-col gap-4">
        <h6 class="font-semibold text-sm text-gray-500 uppercase">Social</h6>
        <div class="flex flex-col gap-3">
          <a href="" class="font-semibold text-base text-gray-600">Twitter</a>
          <a href="" class="font-semibold text-base text-gray-600">LinkedIn</a>
          <a href="" class="font-semibold text-base text-gray-600">Facebook</a>
          <a href="" class="font-semibold text-base text-gray-600">GitHub</a>
          <a href="" class="font-semibold text-base text-gray-600">AngelList</a>
          <a href="" class="font-semibold text-base text-gray-600">Dribbble</a>
        </div>
      </div>
      <div class="w-44 flex flex-col gap-4">
        <h6 class="font-semibold text-sm text-gray-500 uppercase">Legal</h6>
        <div class="flex flex-col gap-3">
          <a href="" class="font-semibold text-base text-gray-600">Terms</a>
          <a href="" class="font-semibold text-base text-gray-600">Privacy</a>
          <a href="" class="font-semibold text-base text-gray-600">Cookies</a>
          <a href="" class="font-semibold text-base text-gray-600">Licenses</a>
          <a href="" class="font-semibold text-base text-gray-600">Settings</a>
          <a href="" class="font-semibold text-base text-gray-600">Contact</a>
        </div>
      </div>
    </div>
    <div
      class="border-t border-t-gray-200 border-solid pt-9 flex flex-row justify-between items-center md:flex-col md:items-start md:gap-8"
    >
      <img src="../assets/untiltlesd.svg" alt="logo" />
      <p class="text-gray-500 font-normal text-base">
        © 2077 Untitled UI. All rights reserved.
      </p>
    </div>
  </div>
</template>
