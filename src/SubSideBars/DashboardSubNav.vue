<template>
  <div class="flex flex-col gap-4">
    <h3 class="text-left font-medium text-base text-gray-900">Dashboard</h3>
    <div class="w-60 flex flex-col items-center gap-1">
      <router-link
        to="/dashboard/overview"
        active-class="bg-gray-50"
        class="flex gap-3.5 w-full h-10 items-center hover:bg-gray-50 rounded-md transition duration-500 ease-in-out py-3 pl-3.5"
      >
        <img
          src="@/assets/dashboardIcons/activity.svg"
          alt="logo"
          height="20"
          width="20"
          class="rounded-lg"
        />
        <h4 class="font-semibold text-base text-gray-900">Overiew</h4>
      </router-link>
      <router-link
        to="/dashboard/notifications"
        active-class="bg-gray-50"
        class="flex gap-3.5 w-full h-10 items-center hover:bg-gray-50 rounded-md transition duration-500 ease-in-out py-3 pl-3.5 pr-3 justify-between"
      >
        <div class="flex gap-3.5">
          <img
            src="@/assets/dashboardIcons/notification-box.svg"
            alt="logo"
            height="20"
            width="20"
            class="rounded-lg"
          />
          <h4 class="font-semibold text-base text-gray-900">Notification</h4>
        </div>
        <p
          class="bg-gray-100 px-2 py-0.5 rounded-2xl text-gray-600 font-medium text-xs"
        >
          10
        </p>
      </router-link>
      <router-link
        to="/"
        active-class="bg-gray-50"
        class="flex gap-3.5 w-full h-10 items-center hover:bg-gray-50 rounded-md transition duration-500 ease-in-out py-3 pl-3.5"
      >
        <img
          src="@/assets/dashboardIcons/bar-line-chart.svg"
          alt="logo"
          height="20"
          width="20"
          class="rounded-lg"
        />
        <h4 class="font-semibold text-base text-gray-900">Activity</h4>
      </router-link>
    </div>
  </div>
</template>
