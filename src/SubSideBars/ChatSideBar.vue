<template>
  <div class="border-r border-gray-200 w-96 flex flex-col h-full">
    <!-- Header -->
    <div class="flex justify-between items-center p-5 border-b border-gray-200">
      <div class="text-lg font-semibold text-gray-900">Messages</div>
      <button
        class="h-10 w-10 shadow-sm border border-gray-300 rounded-lg transition duration-500 ease-in-out hover:bg-gray-50"
      >
        <img
          src="../assets/profileIcons/edit-for-message.svg"
          alt="edit"
          class="h-5 w-5 mx-auto"
        />
      </button>
    </div>

    <!-- Chat list -->
    <div class="flex-grow overflow-y-auto">
      <div class="flex flex-col pt-3">
        <router-link
          :to="`/messages/${loggedInUser.id}-${loggedInUser.id}`"
          active-class="bg-gray-50"
          class="p-4 flex flex-col gap-4 border-b border-gray-200 box-border hover:bg-purple-50 transition duration-500 ease-in-out"
        >
          <div class="flex justify-between">
            <div class="flex gap-3">
              <img
                :src="
                  loggedInUser.photoURL
                    ? loggedInUser.photoURL
                    : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'
                "
                alt="avatar"
                class="rounded-full h-10 w-10"
              />
              <div>
                <h4 class="text-gray-700 font-semibold text-sm">
                  {{ loggedInUser.displayName }}
                </h4>
                <p class="text-gray-600 text-xs font-normal">
                  @{{ loggedInUser.username }}
                </p>
              </div>
            </div>
            <!-- <p class="text-gray-600 text-sm font-normal">
              {{ formatTimestamp(loggedInUser.lastMessageData.timestamp) }}
            </p> -->
          </div>
          <!-- <h5 class="text-gray-600 font-normal text-sm">
            <span class="font-semibold">
              {{
                user.lastMessageData.senderId === loggedInUser.id ? "You: " : ""
              }}
            </span>

            {{
              user.lastMessageData.text.length > 90
                ? user.lastMessageData.text.slice(0, 90) + "..."
                : user.lastMessageData.text
            }}
          </h5> -->
        </router-link>
        <router-link
          v-for="user in otherUsersData"
          :key="user.id"
          :to="`/messages/${user.id}-${loggedInUser.id}`"
          active-class="bg-gray-50"
          class="p-4 flex flex-col gap-4 border-b border-gray-200 box-border hover:bg-purple-50 transition duration-500 ease-in-out"
        >
          <div class="flex justify-between">
            <div class="flex gap-3">
              <img
                :src="
                  user.photoURL
                    ? user.photoURL
                    : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'
                "
                alt="avatar"
                class="rounded-full h-10 w-10"
              />
              <div>
                <h4 class="text-gray-700 font-semibold text-sm">
                  {{ user.displayName }}
                </h4>
                <p class="text-gray-600 text-xs font-normal">
                  @{{ user.username }}
                </p>
              </div>
            </div>
            <p class="text-gray-600 text-sm font-normal">
              {{ formatTimestamp(user.lastMessageData.timestamp) }}
            </p>
          </div>
          <h5 class="text-gray-600 font-normal text-sm">
            <span class="font-semibold">
              {{
                user.lastMessageData.senderId === loggedInUser.id ? "You: " : ""
              }}
            </span>

            {{
              user.lastMessageData.text.length > 90
                ? user.lastMessageData.text.slice(0, 90) + "..."
                : user.lastMessageData.text
            }}
          </h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { db } from "../Config/firebase";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
export default {
  name: "ChatSidebar",
  data() {
    return {
      otherUsers: [],
    };
  },
  computed: {
    ...mapState(["users"]),
    loggedInUser() {
      if (this.$store.state.user) {
        return this.$store.state.user;
      } else {
        return null;
      }
    },
    otherUsersData() {
      const otherUsersIds = this.otherUsers.map((user) => user.id);
      const usersWithLastMessage = this.users
        .filter((user) => otherUsersIds.includes(user.id))
        .map((user) => {
          const lastMessageData = this.otherUsers.reduce((acc, curr) => {
            if (curr.id === user.id) {
              acc = curr.lastMessageData;
            }
            return acc;
          }, null);
          return {
            ...user,
            lastMessageData,
          };
        })
        .filter((user) => user.lastMessageData !== null);

      // Sort the array based on the timestamp of the last message
      return usersWithLastMessage.sort(
        (a, b) =>
          b.lastMessageData.timestamp.toMillis() -
          a.lastMessageData.timestamp.toMillis()
      );
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(newVal, oldVal) {
        this.getOtherUsers();
      },
    },
  },
  methods: {
    formatTimestamp(timestamp) {
      const date = new Date(timestamp.seconds * 1000); // Convert to milliseconds
      const now = new Date();
      const diff = now.getTime() - date.getTime();

      if (diff < 1000) {
        return "just now";
      } else if (diff < 60 * 1000) {
        return `${Math.floor(diff / 1000)} seconds ago`;
      } else if (diff < 60 * 60 * 1000) {
        return `${Math.floor(diff / (60 * 1000))} minutes ago`;
      } else if (diff < 24 * 60 * 60 * 1000) {
        return `${Math.floor(diff / (60 * 60 * 1000))} hours ago`;
      } else {
        return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
      }
    },
    async getOtherUsers() {
      const userChatsRef = collection(db, "userChats");

      // Listen for real-time updates to the userChats collection
      onSnapshot(
        query(
          userChatsRef,
          where("participants", "array-contains", this.loggedInUser.id)
        ),
        async (snapshot) => {
          const otherUsers = [];
          const promises = snapshot.docs.map(async (doc) => {
            const participants = doc.data().participants;
            const otherUserId = participants.find(
              (userId) => userId !== this.loggedInUser.id
            );
            const chatId =
              this.loggedInUser.id < otherUserId
                ? `${this.loggedInUser.id}-${otherUserId}`
                : `${otherUserId}-${this.loggedInUser.id}`;

            const chatMessagesRef = collection(
              db,
              `userChats/${doc.id}/messages`
            );

            // Get the last message from the chatMessages collection
            const querySnapshot = await getDocs(
              query(chatMessagesRef, orderBy("timestamp", "desc"), limit(1))
            );
            const lastMessage =
              querySnapshot.docs.length > 0
                ? querySnapshot.docs[0].data()
                : null;

            const lastMessageData = lastMessage
              ? {
                  senderId: lastMessage.senderId,
                  text: lastMessage.text,
                  timestamp: lastMessage.timestamp,
                }
              : null;

            return {
              id: otherUserId,
              lastMessageData,
            };
          });

          const results = await Promise.all(promises);
          this.otherUsers = results;
        }
      );
    },
  },

  mounted() {
    // Call getOtherUsers every 3 seconds
    setInterval(() => {
      this.getOtherUsers();
    }, 8000);
    //this.getOtherUsers();
  },
};
</script>
