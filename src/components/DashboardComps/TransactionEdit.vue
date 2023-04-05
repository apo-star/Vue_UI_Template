<template>
  <div>
    <button>
      <img
        src="../../assets/dashboardIcons/edit-pencil.svg"
        alt="edit"
        class=""
        height="17"
        width="17"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "TransactionEdit",
  props: {
    transaction: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
