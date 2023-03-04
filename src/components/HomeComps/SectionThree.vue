<template>
  <div class="py-24 px-28 bg-gray-50 flex flex-col gap-8 justify-center">
    <div class="flex flex-row justify-center items-center gap-2">
      <img
        src="@/assets/homeIcons/sisy.svg"
        alt="bolt-circle"
        class="w-11 h-11"
      />
      <h4 class="text-gray-900 font-semibold text-xl">Sisyphus</h4>
    </div>
    <h2 class="text-gray-900 font-medium text-5xl text-center line-height60">
      We’ve been using Untitled to kick start every new project and can’t
      imagine working without it.
    </h2>
    <div class="flex flex-col justify-center items-center gap-4">
      <img
        src="@/assets/homeIcons/home-avatar.png"
        alt="home-avatar"
        class="w-16 h-16 candice"
      />
      <div class="flex flex-col justify-center items-center gap-1">
        <h5 class="text-gray-900 font-semibold text-lg">Candice Wu</h5>
        <p class="text-gray-600 font-normal text-base">
          Product Manager, Sisyphus
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-height60 {
  line-height: 60px;
}
.candice {
  border-radius: 50%;
  background-color: #a2a8cd;
}
</style>
