import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ProjectDetails from '../pages/ProjectDetails.vue';
import BlogDetails from '../pages/BlogDetails.vue';
import ArtAndNewsPage from '../pages/ArtAndNewsPage.vue';
import NotFoundPage from '../pages/NotFound.vue';
import ProjectPage from '../pages/ProjectPage.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/project', component: ProjectPage },
    { path: '/news', component: BlogDetails },
    { path: '/blog', component: ArtAndNewsPage },
    { path: '/project/:id', component: ProjectDetails },
    { path: '/:pathMatch(.*)', component: NotFoundPage },
  ]
});
