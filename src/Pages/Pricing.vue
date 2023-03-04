<template>
  <DefaultLayout>
    <template v-slot:main-contents>
      <div class="wrapper">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </template>
  </DefaultLayout>
</template>
<!-- <template>
    <div class="wrapper">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
    </div>
</template> -->

<style scoped>
.wrapper {
  font-family: "Inter", sans-serif;
}
</style>

<script>
import SectionOne from "@/components/PricingComps/SectionOne.vue";
import SectionTwo from "@/components/PricingComps/SectionTwo.vue";
import SectionThree from "@/components/PricingComps/SectionThree.vue";
import SectionFour from "@/components/PricingComps/SectionFour.vue";
import DefaultLayout from "@/Layouts/DefaultLayout.vue";

export default {
  components: {
    DefaultLayout,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
  },
};
</script>
