<template>
  <div class="flex flex-col gap-4">
    <p class="text-gray-700 text-base font-normal w-80" v-if="routeUser.bio">
      {{ routeUser.bio }}
    </p>
    <p class="text-gray-700 text-base font-normal w-80" v-else>No bio</p>
    <div class="flex gap-4">
      <a
        v-if="routeUser.website"
        :href="routeUser.website"
        target="_blank"
        class="flex gap-2 items-center"
      >
        <img
          src="../../assets/profileIcons/web.svg"
          alt="website"
          class="h-4 w-4"
        />
        <p
          class="text-blue-400 text-sm font-normal hover:underline hover:text-blue-500 transition duration-500 ease-in-out"
        >
          {{ routeUser.website.split("/")[2] }}
        </p>
      </a>
      <div v-if="routeUser.location" class="flex gap-2 items-center">
        <img
          src="../../assets/profileIcons/location.svg"
          alt="location"
          class="h-4 w-4"
        />
        <p class="text-gray-600 text-sm font-normal">
          {{ routeUser.location }}
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-2 grid-flow-row gap-2 gap-x-3 w-max"
      v-if="routeUser.socials"
    >
      <a
        v-if="routeUser.socials.twitter"
        :href="routeUser.socials.twitter"
        target="_blank"
        class="flex gap-2 items-center"
      >
        <img
          src="../../assets/profileIcons/twitter.svg"
          alt="twitter"
          class="h-4 w-4"
        />
        <!-- get username -->
        <p class="text-gray-600 text-sm font-normal">
          {{ routeUser.socials.twitter.split("/")[3] }}
        </p>
      </a>
      <a
        v-if="routeUser.socials.facebook"
        :href="routeUser.socials.facebook"
        target="_blank"
        class="flex gap-2 items-center"
      >
        <img
          src="../../assets/profileIcons/facebook.svg"
          alt="facebook"
          class="h-5 w-5"
        />
        <!-- get username -->
        <p class="text-gray-600 text-sm font-normal">
          {{ routeUser.socials.facebook.split("/")[3] }}
        </p>
      </a>

      <a
        v-if="routeUser.socials.linkedin"
        :href="routeUser.socials.linkedin"
        target="_blank"
        class="flex gap-2 items-center"
      >
        <img
          src="../../assets/profileIcons/linkedin.svg"
          alt="linkedin"
          class="h-4 w-4"
        />
        <!-- get username -->
        <p class="text-gray-600 text-sm font-normal">
          {{ routeUser.socials.linkedin.split("/")[4] }}
        </p>
      </a>
      <a
        v-if="routeUser.socials.instagram"
        :href="routeUser.socials.instagram"
        target="_blank"
        class="flex gap-2 items-center"
      >
        <img
          src="../../assets/profileIcons/instagram.svg"
          alt="instagram"
          class="h-4 w-4"
        />
        <!-- get username -->
        <p class="text-gray-600 text-sm font-normal">
          {{ routeUser.socials.instagram.split("/")[3] }}
        </p>
      </a>
      <a
        v-if="routeUser.socials.github"
        :href="routeUser.socials.github"
        target="_blank"
        class="flex gap-2 items-center"
      >
        <img
          src="../../assets/profileIcons/github.svg"
          alt="github"
          class="h-4 w-4"
        />
        <!-- get username -->
        <p class="text-gray-600 text-sm font-normal">
          {{ routeUser.socials.github.split("/")[3] }}
        </p>
      </a>
      <a
        v-if="routeUser.socials.youtube"
        :href="routeUser.socials.youtube"
        target="_blank"
        class="flex gap-2 items-center"
      >
        <img
          src="../../assets/profileIcons/youtube.svg"
          alt="youtube"
          class="h-4 w-4"
        />
        <!-- get username -->
        <p class="text-gray-600 text-sm font-normal">
          {{ routeUser.socials.youtube.split("/")[3] }}
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Socials",
  props: {
    routeUser: {
      type: Object,
      required: true,
    },
  },
};
</script>