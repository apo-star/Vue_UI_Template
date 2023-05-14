
<div
            class="bg-purple-700 rounded-xl p-5 flex flex-col shadow-sm"
            style="width: 344px; height: 290px"
          >
            <div>
              <Swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="20"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :pagination="{
                  el: '.swiper-pagination',
                  type: 'bullets',
                  clickable: true,
                }"
                :effect="'fade'"
              >
                <swiper-slide>
                  <div
                    class="pt-5 px-5 pb-4 flex flex-col justify-between"
                    style="
                      width: 272px;
                      height: 164px;
                      background: linear-gradient(
                        45deg,
                        #42307d 0%,
                        #7f56d9 100%
                      );
                      box-shadow: 7.64557px 9.55696px 15.2911px
                        rgba(0, 0, 0, 0.05);
                      border-radius: 20px;
                    "
                  >
                    <div class="flex justify-between">
                      <h4 class="font-semibold text-white text-base">
                        Untitled.
                      </h4>
                      <img
                        src="../assets/dashboardIcons/paypass.svg"
                        class="h-6 w-5"
                        alt="paypass"
                      />
                    </div>
                    <div class="flex justify-between items-end">
                      <div class="flex flex-col gap-2">
                        <div class="flex justify-between">
                          <h5 class="text-white font-semibold text-xs">
                            {{ user.displayName }}
                          </h5>
                          <h5 class="text-white font-semibold text-xs">
                            06/25
                          </h5>
                        </div>
                        <h3 class="text-white font-semibold text-sm">
                          1234 1234 1234 1234
                        </h3>
                      </div>
                      <div
                        class="h-8 w-11 flex items-center"
                        style="
                          background: rgba(255, 255, 255, 0.1);
                          border-radius: 3.82278px;
                          padding: 7px;
                        "
                      >
                        <img
                          src="../assets/dashboardIcons/mastercard.svg"
                          alt=""
                          class="mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between mt-5">
                    <p class="text-white text-sm font-medium">This month</p>
                    <p class="text-purple-200 text-sm font-normal">$1,240.40</p>
                  </div>
                  <p class="h-2 relative bg-purple-200 rounded mt-2">
                    <span
                      class="absolute h-2 bg-purple-500 rounded"
                      style="width: 54%"
                    ></span>
                  </p>
                </swiper-slide>

                <swiper-slide>
                  <div
                    class="pt-5 px-5 pb-4 flex flex-col justify-between z-20"
                    style="
                      width: 272px;
                      height: 164px;
                      background: linear-gradient(
                        45deg,
                        #101828 0%,
                        #475467 100%
                      );
                      box-shadow: 8px 10px 16px rgba(0, 0, 0, 0.05);
                      border-radius: 20px;
                    "
                  >
                    <div class="flex justify-between">
                      <h4 class="font-semibold text-white text-base">
                        Untitled.
                      </h4>
                      <img
                        src="../assets/dashboardIcons/paypass.svg"
                        class="h-6 w-5"
                        alt="paypass"
                      />
                    </div>
                    <div class="flex justify-between items-end">
                      <div class="flex flex-col gap-2">
                        <div class="flex justify-between">
                          <h5 class="text-white font-semibold text-xs">
                            {{ user.displayName }}
                          </h5>
                          <h5 class="text-white font-semibold text-xs">
                            06/25
                          </h5>
                        </div>
                        <h3 class="text-white font-semibold text-sm">
                          1234 1234 1234 1234
                        </h3>
                      </div>
                      <div
                        class="h-8 w-11 flex items-center"
                        style="
                          background: rgba(255, 255, 255, 0.1);
                          border-radius: 3.82278px;
                          padding: 7px;
                        "
                      >
                        <img
                          src="../assets/dashboardIcons/mastercard.svg"
                          alt=""
                          class="mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between mt-5">
                    <p class="text-white text-sm font-medium">This month</p>
                    <p class="text-purple-200 text-sm font-normal">$1,240.40</p>
                  </div>
                  <p class="h-2 relative bg-purple-200 rounded mt-2">
                    <span
                      class="absolute h-2 bg-purple-500 rounded"
                      style="width: 54%"
                    ></span>
                  </p>
                </swiper-slide>

                <swiper-slide 
                  
                >
                  <div
                    class="pt-5 px-5 pb-4 flex flex-col justify-between"
                    style="
                      width: 272px;
                      height: 164px;
                      background: linear-gradient(45deg, brown 0%, #dc143c 100%);
                      box-shadow: 8px 10px 16px rgba(0, 0, 0, 0.05);
                      border-radius: 20px;
                    "
                  >
                    <div class="flex justify-between">
                      <h4 class="font-semibold text-white text-base">
                        Untitled.
                      </h4>
                      <img
                        src="../assets/dashboardIcons/paypass.svg"
                        class="h-6 w-5"
                        alt="paypass"
                      />
                    </div>
                    <div class="flex justify-between items-end">
                      <div class="flex flex-col gap-2">
                        <div class="flex justify-between">
                          <h5 class="text-white font-semibold text-xs">
                            {{ user.displayName }}
                          </h5>
                          <h5 class="text-white font-semibold text-xs">
                            06/25
                          </h5>
                        </div>
                        <h3 class="text-white font-semibold text-sm">
                          1234 1234 1234 1234
                        </h3>
                      </div>
                      <div
                        class="h-8 w-11 flex items-center"
                        style="
                          background: rgba(255, 255, 255, 0.1);
                          border-radius: 3.82278px;
                          padding: 7px;
                        "
                      >
                        <img
                          src="../assets/dashboardIcons/mastercard.svg"
                          alt=""
                          class="mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between mt-5">
                    <p class="text-white text-sm font-medium">This month</p>
                    <p class="text-purple-200 text-sm font-normal">$1,240.40</p>
                  </div>
                  <p class="h-2 relative bg-purple-200 rounded mt-2">
                    <span
                      class="absolute h-2 bg-purple-500 rounded"
                      style="width: 54%"
                    ></span>
                  </p>
                </swiper-slide>
              </Swiper>
              <!-- <div class="flex flex-col relative mt-5 w-fit">
                <div class="swiper-pagination custom-pagination"></div>
              </div> -->
            </div>
          </div>

// data() {
    //   return {
    //     activeIndex: 2,
    //     cards: [
    //       {
    //         title: "Untitled",
    //         background: "linear-gradient(45deg, #42307d 0%, #7f56d9 100%)",
    //         expiration: "06/25",
    //         cardNumber: "1234 1234 1234 1234",
    //         icon: "/src/assets/dashboardIcons/mastercard.svg",
    //         month: "This month",
    //         amount: "$1,340.40",
    //         progress: 54,
    //       },
    //       {
    //         title: "Untitled",
    //         background: "linear-gradient(45deg, #101828 0%, #475467 100%  )",
    //         expiration: "09/26",
    //         cardNumber: "5678 5678 5678 5678",
    //         icon: "/src/assets/dashboardIcons/mastercard.svg",
    //         month: "This month",
    //         amount: "$1,240.40",
    //         progress: 54,
    //       },
    //       {
    //         title: "Untitled",
    //         background: "linear-gradient(45deg, brown 0%, #dc143c 100%)",
    //         expiration: "07/25",
    //         cardNumber: "1234 1234 1234 1234",
    //         icon: "/src/assets/dashboardIcons/mastercard.svg",
    //         month: "This month",
    //         amount: "$1,240.40",
    //         progress: 54,
    //       },
    //     ],
    //     acctButtons: [
    //       {
    //         id: 1,
    //         label: "Overview",
    //         component: "AcctOverview",
    //         data: {
    //           accountNumber: "1234567890",
    //           data() {
    //             const activeIndex = this.$refs.mySwiper.$swiper.activeIndex;
    //             return {
    //               balance: this.cards[activeIndex].amount,
    //             };
    //           },
    //         },
    //       },
    //       {
    //         id: 2,
    //         label: "Budget",
    //         component: "AcctBudget",
    //         data: {
    //           budget: "$1,240.40",
    //           spent: "$1,240.40",
    //           remaining: "$1,240.40",
    //         },
    //       },
    //     ],
    //     activeButton: null,
    //   };
    // },


    const [photoURL, setPhotoURL] = useState("https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png")

    useEffect(() => {
       setPhotoURL(currentUser.photoURL);
    }, [currentUser])
  

    // const handleImageChange = (e) => {
    //   if (e.target.files[0]) {
    //     photo.value = e.target.files[0]; // set file
    //     if(photo.value.size > 1000000) {
    //       alert("File size must be less than 1MB");
    //       return;
    //     }
    //     createImagePreview(photo.value);
    //   }
    //   // const file = event.target.files[0];
    //   // if (!file) {
    //   //   photo.value = null;
    //   // }
    // };


    // const updateDetails = async () => {
    //   const currentUser = auth.currentUser;

    //   if (currentUser) {
    //     try {
    //       // Update the user's display name
    //       await updateProfile(currentUser, {
    //         displayName: displayName.value,
    //         email: email.value,
    //       });
    //       // Update the user's email
    //      // await updateEmail(currentUser, email.value);
    //       // Update the user's document in the database
    //       const userRef = doc(db, "users", currentUser.uid);
    //       await updateDoc(userRef, {
    //         displayName: displayName.value,
    //         email: email.value,
    //       });
    //       // Update the user's details in the store
    //       //await store.commit("SET_USER", updatedUser);
    //       await store.commit("SET_USER_DISPLAY_NAME", displayName.value);
    //       await store.commit("SET_USER_EMAIL", email.value);
    //       //router.push("/dashboard");
    //       alert("Details updated");
    //       console.log(store.state.user);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // };


    // const email = ref("");
    // const lastName = ref("");
    // const firstName = ref("");
    // //const displayName = ref("");

    // const displayName = computed(() => {
    //   return `${firstName.value} ${lastName.value}`;
    // });
    <template>
  <div>
    <!-- Render user card when hovering over a mention -->
    <div v-if="showUserCard" class="user-card">
      <img :src="activeUser.avatar" :alt="activeUser.username" />
      <h3>{{ activeUser.username }}</h3>
      <p>{{ activeUser.bio }}</p>
      <router-link :to="'/profile/' + activeUser.username">View profile</router-link>
    </div>

    <!-- Main content of the app -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { username: "user1", avatar: "user1-avatar.jpg", bio: "Bio for user1" },
        { username: "user2", avatar: "user2-avatar.jpg", bio: "Bio for user2" },
        { username: "user3", avatar: "user3-avatar.jpg", bio: "Bio for user3" },
        // Add more users here...
      ],
      showUserCard: false,
      activeUser: null,
    };
  },

  mounted() {
    // Listen for mouseover events on mentions
    document.addEventListener("mouseover", this.handleMentionMouseover);
  },

  methods: {
    handleMentionMouseover(event) {
      const mentionRegex = /@([^\s]+)/;
      const match = mentionRegex.exec(event.target.textContent);
      if (match) {
        const username = match[1];
        const user = this.users.find((u) => u.username === username);
        if (user) {
          this.activeUser = user;
          this.showUserCard = true;
          // Position the user card based on the mouse pointer
          this.positionUserCard(event.clientX, event.clientY);
        }
      }
    },

    positionUserCard(x, y) {
      const userCard = document.querySelector(".user-card");
      if (userCard) {
        const rect = userCard.getBoundingClientRect();
        const cardX = x + 10;
        const cardY = y - rect.height - 10;
        userCard.style.left = `${cardX}px`;
        userCard.style.top = `${cardY}px`;
      }
    },
  },
};
</script>

<style scoped>
.user-card {
  position: fixed;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-card img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>




              <img
                :src="user.photoURL ? user.photoURL : 'https://ui-avatars.com/api/?name='+user.username+'&background=random&rounded=true&color=fff'"
                alt="avatar"
                class="w-10 h-10 rounded-full"
              />

              .hh:hover img {
  filter: invert(0.5) sepia(1) saturate(10000%) hue-rotate(0deg);
}

//hambuger menu icon
    <button class="p-2 rounded-md hover:bg-gray-200 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 14a1 1 0 100 2h12a1 1 0 100-2H4z"
            clip-rule="evenodd"
          />
        </svg>
      </button>


      import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

otherUsersData() {
      return this.users.filter(
        (user) =>
          user.id !== this.loggedInUser.id && this.otherUsers.includes(user.id)
      );
    },


    <!-- <div v-for="message in messages" :key="message.timestamp" class="flex">
          <div
            v-if="message.senderId === loggedInUser.id"
            class="ml-auto bg-gray-300 text-gray-700 rounded-lg px-4 py-2"
          >
            <span class="text-xs">{{ message.senderName }}</span>
            <p class="text-sm">{{ message.text }}</p>
            <p class="text-xs">
              {{
                formatDistanceToNow(
                  new Date(message.timestamp.seconds * 1000),
                  {
                    addSuffix: true,
                  }
                )
              }}
            </p>
          </div>
          <div
            v-else
            class="mr-auto bg-indigo-500 text-white rounded-lg px-4 py-2"
          >
            <span class="text-xs">{{ chatUser.displayName }}</span>
            <p class="text-sm">{{ message.text }}</p>
            <p class="text-xs">
              {{
                formatDistanceToNow(
                  new Date(message.timestamp.seconds * 1000),
                  {
                    addSuffix: true,
                  }
                )
              }}
            </p>
          </div>
        </div> -->
        <!-- <P>{{ displayChat() }}</P> -->
        <!-- <ul>
        
    // async sendMessage() {
    //   if (!this.message) return;
    //   const chatId = this.idOne + "-" + this.idTwo;
    //   const senderId = this.loggedInUser.id;
    //   const receiverId = this.chatUser.id;
    //   const senderName = this.loggedInUser.displayName;
    //   const timestamp = serverTimestamp();
    //   const messageData = {
    //     chatId,
    //     senderId,
    //     receiverId,
    //     senderName,
    //     text: this.message,
    //     timestamp,
    //   };
    //   const messageRef = doc(collection(db, "messages"));
    //   await setDoc(messageRef, messageData);
    //   this.message = "";
    // },
    // loadMessages() {
    //   const chatId = this.idOne + "-" + this.idTwo;
    //   const q = query(
    //     collection(db, "messages"),
    //     where("chatId", "==", chatId),
    //     orderBy("timestamp", "asc")
    //   );
    //   const unsubscribe = onSnapshot(q, (snapshot) => {
    //     this.messages = snapshot.docs.map((doc) => doc.data());
    //   });
    // },
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
      return this.users
        .filter((user) => otherUsersIds.includes(user.id))
        .map((user) => {
          const otherUser = this.otherUsers.find((u) => u.id === user.id);
          return {
            ...user,
            lastMessageData: otherUser.lastMessageData,
          };
        });
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
    async getOtherUsers() {
      const userChatsRef = collection(db, "userChats");

      // Listen for real-time updates to the userChats collection
      onSnapshot(
        query(
          userChatsRef,
          where("participants", "array-contains", this.loggedInUser.id)
        ),
        (snapshot) => {
          const otherUsers = [];
          snapshot.forEach(async (doc) => {
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

            otherUsers.push({
              id: otherUserId,
              lastMessageData,
            });
          });
          this.otherUsers = otherUsers;
        }
      );
    },
  },

  mounted() {
    this.getOtherUsers();
  },
};
</script>






//after 





<script>
import { mapState } from "vuex";
import { db } from "../Config/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { th } from "date-fns/locale";
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
      return this.users.filter(
        (user) =>
          user.id !== this.loggedInUser.id && this.otherUsers.includes(user.id)
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
    async getOtherUsers() {
      const userChatsRef = collection(db, "userChats");

      // Listen for real-time updates to the userChats collection
      onSnapshot(
        query(
          userChatsRef,
          where("participants", "array-contains", this.loggedInUser.id)
        ),
        (snapshot) => {
          const otherUsers = [];
          snapshot.forEach((doc) => {
            const participants = doc.data().participants;
            const otherUserId = participants.find(
              (userId) => userId !== this.loggedInUser.id
            );
            otherUsers.push(otherUserId);
          });
          this.otherUsers = otherUsers;
        }
      );
    },
  },

  onMounted() {
    this.getOtherUsers();
  },
};
</script>