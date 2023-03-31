<template>
    <div>
      <h2>Account Details</h2>
      <p>Account Number: {{ data.accountNumber }}</p>
      <p>Balance: ${{ balance }}</p>
    </div>
  </template>
  
  <script>
  import {ref, computed} from 'vue';
  export default {
    name: 'AcctOverview',
     props: {
    data: {
      type: Object,
      default: () => {},
    },
    balance: {
      type: String,
      default: 0,
    },
  },
  };
  </script>