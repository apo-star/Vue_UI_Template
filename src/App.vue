<script setup>
import Header from "./components/Header.vue";
// import SectionOne from "./components/SectionOne.vue";
// import SectionTwo from "./components/SectionTwo.vue";
// import SectionThree from "./components/SectionThree.vue";
// import SectionFour from "./components/SectionFour.vue";
import Footer from "./components/Footer.vue";
// import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <!-- <header>
    <Header />

     <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> 
  </header> -->

  <main class="">
    <!-- <TheWelcome /> -->
    <router-view/>
  </main>

  <!-- <footer>
     <Footer /> 
  </footer> -->
</template>

<style scoped>
header {
  font-family: "Inter", sans-serif;
}
main {
  font-family: "Inter", sans-serif;
}
footer {
  font-family: "Inter", sans-serif;
}


</style>
