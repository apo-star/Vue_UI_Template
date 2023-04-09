<template>
  <div>
    <button @click="showModal = true">
      <img
        src="../../assets/dashboardIcons/edit-pencil.svg"
        alt="edit"
        class=""
        height="17"
        width="17"
      />
    </button>
    <div v-if="showModal" class="modal" 
        @click="showModal = false"
    >
      <div class="modal-content flex flex-col gap-4"
        @click.stop
      >
        <div
          class="flex justify-between items-center border-b-gray-200 border-b pb-6"
        >
          <div class="flex gap-3 items-center">
            <span v-if="transaction.icon">
              <img
                :src="transaction.icon"
                alt="icon"
                class="inline-block h-10 w-10 rounded-full"
              />
            </span>
            <span
              v-else
              class="h-10 w-10 rounded-full text-center bg-gray-100 font-medium text-base text-gray-600 flex items-center justify-center"
            >
              {{ transaction.initial }}
            </span>
            <span class="font-gray-900 text-sm font-medium">
              {{ transaction.label }}
            </span>
          </div>
          <div>
            <button @click="showModal = false">
              <img
                src="../../assets/dashboardIcons/close.svg"
                alt="close"
                class=""
                height="20"
                width="20"
              />
            </button>
          </div>
        </div>
        <form @submit.prevent="editTransaction" class="flex flex-col gap-4">
          <div class="flex justify-between items-center flex-row">
            <label
              class="flex justify-between items-center flex-row"
              for="amount"
            >
              <p class="font-medium text-gray-700 text-sm">Amount:</p>
            </label>
            <Input
              v-model="updatedTransaction.amount"
              type="text"
              placeholder="Amount"
              value="updatedTransaction.amount"
              name="amount"
              style="width: 448px; height: 44px"
            />
          </div>
          <div class="flex justify-between items-center flex-row">
            <label
              class="flex justify-between items-center flex-row"
              for="date"
            >
              <p class="font-medium text-gray-700 text-sm">Date:</p>
            </label>
            <Input
              v-model="formattedDate"
              type="datetime-local"
              placeholder="Date"
              value="formattedDate"
              name="date"
              style="width: 448px; height: 44px"
            />
          </div>
          <div class="flex justify-between items-center flex-row">
            <label
              class="flex justify-between items-center flex-row"
              for="category"
            >
              <p class="font-medium text-gray-700 text-sm">Category:</p>
            </label>
            <select
              v-model="updatedTransaction.category"
              class="border border-solid bg-white border-gray-300 font-normal text-base text-gray-900 rounded-lg px-3.5 py-2.5 shadow-sm focus:border-purple-300 focus:border focus:shadow-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:background-gray-50 disabled:border-gray-300 disabled:text-gray-500 after:bg-white"
              style="width: 448px; height: 44px"
            >
              <option v-for="category in categories" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <div class="flex justify-between items-center flex-row">
            <label
              class="flex justify-between items-center flex-row"
              for="account"
            >
              <p class="font-medium text-gray-700 text-sm">Account:</p>
            </label>

            <select
              v-model="updatedTransaction.account[0].name"
              class="border border-solid bg-white border-gray-300 font-normal text-base text-gray-900 rounded-lg px-3.5 py-2.5 shadow-sm focus:border-purple-300 focus:border focus:shadow-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:background-gray-50 disabled:border-gray-300 disabled:text-gray-500 after:bg-white"
              style="width: 448px; height: 44px"
            >
              <option v-for="account in accounts" :value="account">
                {{ account }}
              </option>
            </select>
          </div>
          <PurpleButton type="submit" class="h-10 w-60"> Update </PurpleButton>
        </form>
        <div class="flex justify-between gap-3 mt-3">
          <WhiteButtonVue @click="showModal = false" class="h-11 w-full"
            >Cancel
          </WhiteButtonVue>
          <WhiteButtonVue
            @click="deleteTransaction"
            class="h-11 w-full text-white"
            style="background-color: #d92d20"
            >Delete
          </WhiteButtonVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Input from "../Input.vue";
import PurpleButton from "../PurpleButton.vue";
import WhiteButtonVue from "../WhiteButton.vue";
export default {
  name: "TransactionEdit",
  components: {
    Input,
    PurpleButton,
    WhiteButtonVue,
  },
  props: {
    transaction: {
      type: Object,
      default: () => {},
    },
    categories: {
      type: Array,
      default: () => [],
    },
    accounts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showModal: false,
      updatedTransaction: {
        id: this.transaction.id,
        label: this.transaction.label,
        amount: this.transaction.amount,
        date: this.transaction.date,
        icon: this.transaction.icon,
        initial: this.transaction.initial,
        category: this.transaction.category,
        color: this.transaction.color,
        background: this.transaction.background,
        account: this.transaction.account,
      },
      formattedDate: moment(this.transaction.date, "ddd h:mma").format(
        "YYYY-MM-DDTHH:mm:ss"
      ),
    };
  },
  methods: {
    editTransaction(updatedTransaction) {
      //   if (this.updatedTransaction.label !== this.transaction.label) {
      //     this.updatedTransaction.icon = "";
      //     this.updatedTransaction.initial = "HH";
      //   }
      this.updatedTransaction.date = moment(this.formattedDate).format(
        "ddd h:mma"
      );
      this.$emit("updateTransaction", this.updatedTransaction);
      this.showModal = false;
    },
    deleteTransaction(id) {
      this.$emit("deleteTransaction", this.transaction.id);
      this.showModal = false;
    },
  },
  //   computed: {
  //     formattedDate() {
  //       return moment(this.updatedTransaction.date).format("ddd h:mma");
  //     },
  //   },
 
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 24px;
  border: 1px solid #888;
  width: 688px;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
}

form label {
  display: block;
  margin-bottom: 10px;
}
</style>
