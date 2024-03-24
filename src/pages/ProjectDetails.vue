<template>
  <div class="container">
    <Slider />
    <Footer/>
  </div>
</template>

<script>
import Slider from '../components/slider/Slider.vue';
import Footer from '../components/cammon/footer/Footer.vue'

export default {
  components: {
    Slider,
    Footer
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
