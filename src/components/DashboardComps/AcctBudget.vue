<template>
    <div>
      <h2>Account Details</h2>
      <p>Account Budget: {{ data.budget }}</p>
      <p>Balance: {{ data.spent }}</p>
      <p>Transaction History: {{ data.remaining }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AcctBudget',
    props: {
      data: Object,
    },
  };
  </script>