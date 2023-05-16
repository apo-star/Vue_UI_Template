<template>
  <div v-if="!chatUser">
    <h1>Loading..</h1>
  </div>
  <div v-else class="w-full relative min-h-screen bg-gray-50">
    <div style="position: sticky; top: 0">
      <div
        class="py-5 px-6 flex row justify-between border-b border-gray-200 bg-white shadow"
      >
        <router-link :to="`/${chatUser.username}`" class="flex items-center">
          <img
            :src="
              chatUser.photoURL
                ? chatUser.photoURL
                : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'
            "
            class="w-14 h-14 rounded-full border"
          />
          <div>
            <h1 class="font-semibold text-lg ml-4">
              {{ chatUser.displayName }}
              <span v-if="chatUser.admin" class="relative" title="Admin">
                <img
                  src="../../assets/profileIcons/admin-tag.svg"
                  alt="admin"
                  class="h-6 w-6 inline-block"
                  title="Admin"
                />
                <p
                  class="absolute top-1 left-2 text-xs font-semibold text-white"
                >
                  A
                </p>
              </span>
            </h1>
            <p class="text-sm text-gray-500 ml-4">@{{ chatUser.username }}</p>
          </div>
        </router-link>
        <button>
          <img
            src="../../assets/dashboardIcons/dots-vertical.svg"
            alt="dots-vertical"
            class="w-5 h-5"
          />
        </button>
      </div>
    </div>
    <div class="mt-10 flex flex-col gap-28">
      <div class="text-center flex flex-col items-center justify-center gap-4">
        <img
          :src="
            chatUser.photoURL
              ? chatUser.photoURL
              : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'
          "
          class="w-20 h-20 rounded-full border"
        />
        <div class="flex flex-col">
          <h1 class="font-bold text-lg text-gray-900">
            {{ chatUser.displayName }}
            <span v-if="chatUser.admin" class="relative" title="Admin">
              <img
                src="../../assets/profileIcons/admin-tag.svg"
                alt="admin"
                class="h-6 w-6 inline-block"
                title="Admin"
              />
              <p class="absolute top-1 left-2 text-xs font-semibold text-white">
                A
              </p>
            </span>
          </h1>
          <p class="text-base text-gray-600">@{{ chatUser.username }}</p>
        </div>
        <h3 class="text-sm text-gray-800 w-96">{{ chatUser.bio }}</h3>
        <div class="flex gap-1 items-center">
          <h2 class="text-sm text-gray-600">
            Joined
            {{
              new Date(chatUser.createdAt.seconds * 1000).toLocaleDateString(
                "en-US",
                { month: "long", day: "numeric", year: "numeric" }
              )
            }}
          </h2>

          <p>-</p>
          <h2 class="text-sm text-gray-600">
            {{ chatUser.followers.length }} followers
          </h2>
        </div>
      </div>
      <div class="mb-10" style="min-height: 380px">
        <ul class="flex flex-col gap-7 px-10">
          <li v-for="message in messages" :key="message.timestamp">
            <div
              v-if="message.senderId === loggedInUser.id"
              class="flex flex-col gap-1.5 items-end"
            >
              <!-- <div class="flex items-start">
                <p class="text-gray-700 text-sm font-medium text-left">You</p>
              </div> -->
              <div
                style="max-width: 508px"
                class="bg-purple-600 py-2.5 px-3.5 rounded-lg"
              >
                <p class="text-white font-normal text-base">
                  {{ message.text }}
                </p>
              </div>
              <p class="text-gray-600 text-xs font-normal">
                {{ formatTime(message.timestamp.seconds * 1000) }}
              </p>
            </div>
            <div v-else class="flex gap-3">
              <img
                :src="
                  chatUser.photoURL
                    ? chatUser.photoURL
                    : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'
                "
                class="w-10 h-10 rounded-full border"
              />
              <div class="flex flex-col gap-1.5 items-start">
                <div class="flex justify-between gap-4">
                  <p class="text-gray-700 text-sm font-medium">
                    {{ chatUser.displayName }}
                    <span v-if="chatUser.admin" class="relative" title="Admin">
                      <img
                        src="../../assets/profileIcons/admin-tag.svg"
                        alt="admin"
                        class="h-6 w-6 inline-block"
                        title="Admin"
                      />
                      <p
                        class="absolute top-0.5 left-2 text-xs font-semibold text-white"
                      >
                        A
                      </p>
                    </span>
                  </p>
                </div>
                <div
                  style="max-width: 508px"
                  class="bg-gray-200 py-2.5 px-3.5 rounded-lg"
                >
                  <p class="text-gray-700 font-normal text-base">
                    {{ message.text }}
                  </p>
                </div>
                <p class="text-gray-600 text-xs font-normal">
                  {{ formatTime(message.timestamp.seconds * 1000) }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="bg-gray-50 border-t border-purple-300 py-3"
      style="position: sticky; bottom: 0"
    >
      <div class="flex justify-between px-20 relative">
        <div class="absolute top-3 pl-1">
          <button
            type="button"
            class="inline-flex justify-center p-2 text-purple-600 rounded-full cursor-pointer hover:text-purple-900 hover:bg-purple-100 transition duration-300 ease-in-out"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Upload image</span>
          </button>
          <button
            type="button"
            class="p-2 text-purple-600 rounded-full cursor-pointer hover:text-purple-900 hover:bg-purple-100 transition duration-300 ease-in-out"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Add emoji</span>
          </button>
        </div>
        <button
          type="submit"
          class="absolute inset-y-0 right-24 bg-white text-purple-600 w-10 h-10 flex items-center justify-center rounded-md shadow-xl hover:bg-purple-100 hover:text-purple-800 transition duration-300 ease-in-out top-3"
          :class="{
            ' text-purple-400 hover:text-purple-500': message.length === 0,
          }"
          @click="sendMessage"
        >
          <svg
            aria-hidden="true"
            class="w-8 h-8 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
            ></path>
          </svg>
          <span class="sr-only">Send message</span>
        </button>
        <textarea
          placeholder="Type a message..."
          class="w-full bg-white font-normal text-base text-gray-900 rounded-lg py-2.5 shadow-sm focus:outline-none disabled:background-gray-50 disabled:border-gray-300 disabled:text-gray-500 after:bg-white transition duration-300 ease-in-out resize-none box-border pr-16 pl-24"
          v-model="message"
          :rows="rows"
          @input="handleInput"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { db } from "../../Config/firebase";
import { formatDistanceToNow } from "date-fns";
import moment from "moment";
import {
  serverTimestamp,
  setDoc,
  doc,
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  getDocs,
} from "firebase/firestore";

export default {
  name: "ChatRoom",
  data() {
    return {
      //get ids from url
      idOne: this.$route.params.idone,
      idTwo: this.$route.params.idtwo,
      message: "",
      rows: 2,
      maxChars: 120,
      messages: [],
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(newVal, oldVal) {
        this.idOne = newVal.params.idone;
        this.idTwo = newVal.params.idtwo;
        this.displayChat();
      },
    },
  },
  created() {
    if (
      this.loggedInUser.id !== this.idOne &&
      this.loggedInUser.id !== this.idTwo
    ) {
      this.$router.push("/messages/select-and-message");
    }
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
    chatUser() {
      //remove id that matches loggedInUser id
      let otherUserId =
        this.idOne === this.loggedInUser.id ? this.idTwo : this.idOne;

      // Find the other user's data in the Vuex store
      let user = this.users.find((user) => user.id === otherUserId);
      return user;
    },
  },
  methods: {
    formatTime(timestamp) {
      const now = moment();
      const messageTime = moment(timestamp);
      const diffInDays = now.diff(messageTime, "days");

      // If the message is from today, show just the time
      if (diffInDays === 0) {
        return messageTime.format("h:mm A");
      }

      // If the message is from within the last 7 days, show the day of the week and time
      if (diffInDays < 7) {
        return messageTime.format("ddd h:mm A");
      }

      // Otherwise, show the full date and time
      return messageTime.format("MMM D, YYYY h:mm A");
    },

    handleInput(event) {
      this.message = event.target.value;
      const numRows =
        event.target.value.length > this.maxChars
          ? Math.ceil(event.target.value.length / this.maxChars)
          : 2;
      if (numRows !== this.rows) {
        this.rows = numRows;
      }
    },
    async sendMessage() {
      if (!this.message) return;
      const userChatsRef = collection(db, "userChats");

      const chatId =
        this.idOne < this.idTwo
          ? `${this.idOne}-${this.idTwo}`
          : `${this.idTwo}-${this.idOne}`;

      // Check if chat already exists between these two users
      const chatQuery = query(userChatsRef, where("chatId", "==", chatId));
      const chatQuerySnapshot = await getDocs(chatQuery);

      let chatDocRef;
      if (chatQuerySnapshot.empty) {
        // Chat doesn't exist, create new chat document
        chatDocRef = doc(userChatsRef);
        const chatData = {
          chatId,
          participants: [this.idOne, this.idTwo],
        };
        await setDoc(chatDocRef, chatData);
      } else {
        // Chat already exists, use existing chat document
        chatDocRef = chatQuerySnapshot.docs[0].ref;
      }

      // Add new message to chat subcollection
      const chatMessagesRef = collection(chatDocRef, "messages");
      const senderId = this.loggedInUser.id;
      const receiverId = this.chatUser.id;
      const senderName = this.loggedInUser.displayName;
      const timestamp = serverTimestamp();
      const messageData = {
        senderId,
        receiverId,
        senderName,
        text: this.message,
        timestamp,
      };
      await addDoc(chatMessagesRef, messageData);

      this.message = "";
      this.displayChat();
    },
    async displayChat() {
      const userChatsRef = collection(db, "userChats");

      const chatId =
        this.idOne < this.idTwo
          ? `${this.idOne}-${this.idTwo}`
          : `${this.idTwo}-${this.idOne}`;

      // Check if chat already exists between these two users
      const chatQuery = query(userChatsRef, where("chatId", "==", chatId));
      const chatQuerySnapshot = await getDocs(chatQuery);

      let chatDocRef;
      if (chatQuerySnapshot.empty) {
        // Chat doesn't exist
        this.messages = [];
        return;
      } else {
        // Chat exists, get its messages subcollection
        chatDocRef = chatQuerySnapshot.docs[0].ref;
        const chatMessagesRef = collection(chatDocRef, "messages");

        // Listen for changes to the messages subcollection
        onSnapshot(chatMessagesRef, (querySnapshot) => {
          const newMessages = [];
          querySnapshot.forEach((doc) => {
            newMessages.push(doc.data());
          });
          // Sort the messages by their timestamp field in ascending order
          newMessages.sort((a, b) => a.timestamp - b.timestamp);
          this.messages = newMessages;
        });
      }
    },
    formatDistanceToNow,
  },

  onMounted() {
    this.displayChat();
  },
};
</script>

<style scoped>
.message-right {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 10px;
}

.message-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

.message-label {
  font-weight: bold;
  margin-right: 5px;
}

.message-text {
  padding: 5px;
  border-radius: 10px;
  background-color: #e6e6e6;
}
</style>
```
