<template>
  <button
    class="btn-pur text-white  rounded-lg border-solid font-semibold text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-100 focus:ring-offset-violet-100   disabled:cursor-not-allowed transition duration-500 ease-in-out"
    :disabled="disabled"
    :type="type"
    :on-click="onClick"
  >
    <slot> Default Button </slot>
  </button>
</template>

<script>
export default {
  name: "PurpleButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn-pur {
  background: #7f56d9;
  /* Primary/600 */

  border: 1px solid #7f56d9;
  /* Shadow/xs */

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}

.btn-pur:hover {
  background: #6941c6;
  /* Primary/700 */

  border: 1px solid #6941c6;
  /* Shadow/xs */
}

.btn-pur:disabled {
  background: #E9D7FE;
/* Primary/200 */

border: 1px solid #E9D7FE;
/* Shadow/xs */

box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
</style>
