<template>
  <DefaultLayout>
    <template v-slot:main-contents>
      <div class="main">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </div>
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import SectionOne from "@/components/HomeComps/SectionOne.vue";
import SectionTwo from "@/components/HomeComps/SectionTwo.vue";
import SectionThree from "@/components/HomeComps/SectionThree.vue";
import SectionFour from "@/components/HomeComps/SectionFour.vue";
import SectionFive from "@/components/HomeComps/SectionFive.vue";
import SectionSix from "@/components/HomeComps/SectionSix.vue";
import SectionSeven from "@/components/HomeComps/SectionSeven.vue";

export default {
  name: "Home",
  components: {
    DefaultLayout,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
  },
};
</script>

<style scoped>
.main {
  font-family: "Inter", sans-serif;
}
</style>
