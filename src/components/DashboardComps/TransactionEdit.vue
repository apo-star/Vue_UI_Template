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
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <div class="py-4 pl-6 flex gap-3 items-center">
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
        <h4>{{ transaction.label }}</h4>
        <form @submit.prevent="editTransaction">
          <label>
            Label:
            <input type="text" v-model="updatedTransaction.label" />
          </label>
          <label>
            Amount:
            <input type="text" v-model="updatedTransaction.amount" />
          </label>
          <label>
            Date:
            <input type="datetime-local" v-model="formattedDate" />
          </label>
          <label>
            Category:
            <select v-model="updatedTransaction.category">
              <option v-for="category in categories" :value="category">
                {{ category }}
              </option>
            </select>
          </label>
          <label>
            Account:
            <select v-model="updatedTransaction.account[0].name">
              <option v-for="account in accounts" :value="account">
                {{ account }}
              </option>
            </select>
          </label>
          <button type="submit">Update</button>
        </form>
        <button @click="deleteTransaction">Delete</button>
        <button @click="showModal = false">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "TransactionEdit",
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
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

form label {
  display: block;
  margin-bottom: 10px;
}
</style>
