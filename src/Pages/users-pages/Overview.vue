<template>
  <div class="px-8 pt-8 pb-12 flex flex-col gap-7 w-full">
    <h1 class="text-gray-900 font-semibold text-3xl">Users</h1>
    <hr class="border-gray-200" />
    <div class="w-full border border-gray-200 rounded-xl">
      <table class="table-auto text-left w-full rounded-xl shadow-sm">
        <thead class="  ">
          <tr
            class="border-b-gray-200 border-b font-medium text-xs text-gray-600 bg-gray-50 rounded"
          >
            <th class="py-3.5 pl-6 rounded-tl-xl">Name</th>
            <th class="py-3.5 pl-6">Date Joined</th>
            <th class="py-3.5 pl-6 rounded-tr-xl">Last Active</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.id">
          <tr class="border-b-gray-200 border-b">
            <td class="py-4 pl-6 rounded-bl-xl flex gap-5 items-center">
              <img
                :src="
                  user.photoURL
                    ? user.photoURL
                    : '/src/assets/dashboardIcons/avatar-default.svg'
                "
                alt="User avatar"
                class="h-28 w-28 rounded-lg border-2 border-gray-200"
              />
              <div>
                <h1>
                  {{ user.displayName }}
                  <span v-if="user.email === me.email">(me)</span>
                  <span v-else>(you)</span>
                </h1>
                <h1>{{ user.email }}</h1>
              </div>
            </td>
            <td class="pl-6">
              {{ new Date(user.createdAt.seconds * 1000).toLocaleDateString()  }}
            </td>
            <td class="pl-6 border-br-xl">12/12/2021</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="flex flex-col gap-7">
      <div v-for="user in users" :key="user.id" class="flex gap-5">
        <img
          :src="
            user.photoURL
              ? user.photoURL
              : '/src/assets/dashboardIcons/avatar-default.svg'
          "
          alt="User avatar"
          class="h-28 w-28 rounded-lg border-2 border-gray-200"
        />
        <div>
          <h1>
            {{ user.displayName }}
            <span v-if="user.email === me.email">(me)</span>
            <span v-else>(you)</span>
          </h1>
          <h1>{{ user.email }}</h1>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";


export default {
  computed: {
    ...mapState(["user", "users"]),
    //set me as user
    me() {
      return this.user;
    },
  },

};
</script>

<style scoped>
.table-auto {
  width: 100%;
  border-collapse: collapse;
}
</style>
