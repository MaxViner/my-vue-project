<template>
  <div class="container">
    <Banner />
    <ProjectsGalery />
    <Statistic />
    <News />
    <Footer />
    
  </div>
</template>

<script>
import Banner from '../components/mainPage/banner/Banner.vue';
import ProjectsGalery from '../components/mainPage/projectsGalery/ProjectsGalery.vue';
import Statistic from '../components/mainPage/statistic/Statistic.vue';
import News from '../components/mainPage/news/News.vue';
import Footer from '../components/cammon/footer/Footer.vue'

export default {
  components: {
    Banner: Banner,
    ProjectsGalery: ProjectsGalery,
    Statistic: Statistic,
    News: News,
    Footer: Footer,
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
