<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/cammon/header/Header.vue';
import Footer from './components/cammon/footer/Footer.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>
.container {
  box-sizing: border-box;
  width: 1920px;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
}
</style>
