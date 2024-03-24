<template>
  <section class="ProjectsGalery">
    <h2>Follow Our Projects</h2>
    <p>
      It is a long established fact that a reader will be distracted by the of readable content of page lookings at its
      layouts points.
    </p>
    <ul>
      <li v-for="(project, index) in projects" :key="index" class="ProjectsGalery-item">
        <img :src="project.image" :alt="project.description" />
        <div class="ProjectsGalery-item-description">
          <div>
            <h5>{{ project.description }}</h5>
            <p>{{ project.category }}</p>
          </div>
          <router-link :to="'/project/' + project.id"  @click="setProject(project)">
            <button>
              <img src="../../../assets/images/Rightbracket.svg" alt="Rightbracket" />
            </button>
          </router-link>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ProjectsGalery',
  data() {
    return {
      projects: [
        {id:22, description: 'Modern Kitchen', category: 'Decor / Architecture', image: '/projects/proj1.svg' },
        {id:23, description: 'Another Project', category: 'Decor / Architecture', image: '/projects/proj2.svg' },
        {id:24, description: 'Third Project', category: 'Decor / Architecture', image: '/projects/proj3.svg' },
        {id:25, description: 'Fourth Project', category: 'Decor / Architecture', image: '/projects/proj4.svg' },
      ],
    };
  },
    methods: {
 setProject(newProject) {
  this.$store.commit('proj/setProj', newProject);
},
  },
};
</script>

<style scoped>
h2 {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: center;
}
p {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: center;
}
.ProjectsGalery {
  box-sizing: border-box;
  width: 100%;
  padding: 9%;
}
.ProjectsGalery ul {
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}

.ProjectsGalery li {
  list-style: none;
}

.ProjectsGalery img {
  width: 100%;
  border-radius: 0;
}

.ProjectsGalery li:nth-of-type(2) img {
  border-top-left-radius: 50px;
}

.ProjectsGalery li:nth-of-type(1) img {
  border-top-right-radius: 50px;
}

.ProjectsGalery li:nth-of-type(4) img {
  border-bottom-left-radius: 50px;
}

.ProjectsGalery li:nth-of-type(3) img {
  border-bottom-right-radius: 50px;
}

.ProjectsGalery h5,
.ProjectsGalery p {
  text-align: center;
}
.ProjectsGalery-item-description button {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 0.6s ease-in-out;
}
.ProjectsGalery-item-description button:hover {
  transform: scale(1.08);
  outline: none;
  background-color: aqua;
  border: none;
}
.ProjectsGalery-item-description > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.ProjectsGalery-item-description > div h5 {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 0px;
}
.ProjectsGalery-item-description > div p {
  margin-top: 0px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: left;
}

.ProjectsGalery-item-description  button img {
  width: 8px;
  height: 18px;
}
.ProjectsGalery-item-description {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
