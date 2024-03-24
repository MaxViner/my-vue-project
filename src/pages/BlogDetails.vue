<template>
  <div class="container">
    <BlogContent />
    <Foooter />
  </div>
</template>

<script>
import BlogContent from '../components/blogDetails/BlogContent.vue';
import Footer from '../components/cammon/footer/Footer.vue'

export default {
  components: {
    BlogContent,
    Footer,
  },
};
</script>

<style>
.container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1920px;
  padding: 0;
  margin: 0 auto;
}
</style>
