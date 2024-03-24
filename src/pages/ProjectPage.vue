<template>
  <div class="container">
    <Project />
    <Footer/>

  </div>
</template>

<script>
import Project from '../components/projec/Project.vue';
import Footer from '../components/cammon/footer/Footer.vue'
export default {
  components: {
    Project,        Footer,

  },
};
</script>

<style>
.container {
  box-sizing: border-box;
  width: 100vw;
  max-width: 1920px;
  padding: 0;
  margin: 0 auto;
}
</style>
