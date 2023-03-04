<template>
  <button
    class="btn-pur text-gray-700  rounded-lg border-solid font-semibold text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 focus:ring-offset-gray-100
    ,   disabled:cursor-not-allowed"
    :disabled="disabled"
    :type="type"
  >
    <slot> Default Button </slot>
  </button>
</template>

<script>
export default {
  name: "WhiteButton",
  type: {
    type: String,
    default: "button",
  },
  props: {
    disabled: {
      type: String,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn-pur {
  background: #ffffff;
  /* Gray/300 */

  border: 1px solid #d0d5dd;
  /* Shadow/xs */

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}

.btn-pur:hover {
  background: #f9fafb;
  /* Gray/300 */

  border: 1px solid #d0d5dd;
  /* Shadow/xs */

}

.btn-pur:disabled {
    background: #FFFFFF;
/* Gray/200 */

border: 1px solid #EAECF0;
/* Shadow/xs */

box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

color: #D0D5DD;
}
</style>
