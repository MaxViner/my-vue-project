<script>
export default {
  name: 'Project',
  data() {
    return {
      items: [
        { id: 1, type: 'Bathroom', description: 'Bathroom item 1', image: '/galery/bad/Photo1.svg', like: true },
        { id: 2, type: 'Bathroom', description: 'Bathroom item 3', image: '/galery/bad/Photo3.svg', like: false },
        { id: 3, type: 'Bathroom', description: 'Bathroom item 2', image: '/galery/bad/Photo2.svg', like: false },
        { id: 4, type: 'Bed Room', description: 'Bedroom item 1', image: '/galery/bed/ph1.jpg', like: true },
        { id: 5, type: 'Bed Room', description: 'Bedroom item 2', image: '/galery/bed/ph2.jpg', like: false },
        { id: 6, type: 'Bed Room', description: 'Bedroom item 2', image: '/galery/bed/ph2.jpg', like: false },

        { id: 7, type: 'Kitchen', description: 'Kitchen item 1', image: '/galery/kitch/ph1.jpg', like: true },
        { id: 8, type: 'Kitchen', description: 'Kitchen item 1', image: '/galery/kitch/ph2.jpg', like: false },
        { id: 9, type: 'Kitchen', description: 'Kitchen item 1', image: '/galery/kitch/ph3.jpg', like: false },
        { id: 10, type: 'Living Area', description: 'Living area item 1', image: '/galery/liv/ph1.jpg', like: true },
        { id: 11, type: 'Living Area', description: 'Living area item 2', image: '/galery/liv/ph2.jpg', like: false },
        { id: 12, type: 'Living Area', description: 'Living area item 3', image: '/galery/liv/ph2.jpg', like: false },
      ],
      selectedType: null,
    };
  },
  computed: {
    filteredItems() {
      if (!this.selectedType) {
        return this.items;
      }
      return this.items.filter((item) => item.type === this.selectedType);
    },
    activePage() {
      return this.$store.state.paginationNews.activePage;
    },
    totalPages() {
      return 3;
    },
  },
  methods: {
    filterItems(type) {
      this.selectedType = type;
    },
    setActivePage(pageNumber) {
      this.$store.commit('paginationNews/setActivePage', pageNumber);
    },

 setProject(newProject) {
  this.$store.commit('proj/setProj', newProject);
},
  },
};
</script>

<template>
  <section class="news">
    <img src="./Banner.svg" alt="Banner" class="banner" />
    <div class="filter">
      <button @click="filterItems('Bathroom')" :class="{ active: selectedType === 'Bathroom' }">Bathroom</button>
      <button @click="filterItems('Bed Room')" :class="{ active: selectedType === 'Bed Room' }">Bed Room</button>
      <button @click="filterItems('Kitchen')" :class="{ active: selectedType === 'Kitchen' }">Kitchen</button>
      <button @click="filterItems('Living Area')" :class="{ active: selectedType === 'Living Area' }">
        Living Area
      </button>
    </div>

    <article class="gallery">
      <div v-for="(item, index) in filteredItems" :key="index" class="item">
        <div v-if="item.like" class="star">
          <img src="./Star.svg" alt="Star icon" />
        </div>
        <img :src="item.image" alt="item.image" />
        <div class="item-desc">
          <div>
            <h4>{{ item.description }}</h4>
            <p>{{ item.type }}</p>
          </div>
          <router-link :to="'/project/' + item.id"  @click="setProject(item)">
            <button>
              <img src="../../assets/images/Rightbracket.svg" alt="Rightbracket" />
            </button>
          </router-link>
        </div>
      </div>
    </article>

    <div class="pagination">
      <div class="pagination">
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{ active: pageNumber === activePage }"
          @click="setActivePage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </div>
      <button><img src="../../assets/images/Rightbracket.svg" alt="Rightbracket" /></button>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 100px;
}
.star {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
}
.filter {
  display: flex;
  width: 880px;
  height: 75px;
  gap: 10px;
  border-radius: 18px 0px 0px 0px;
  border: 1px solid rgba(205, 162, 116, 1);
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 10px;
  justify-content: space-between;
}
.filter button {
  width: 25%;
  background-color: transparent;
  padding: 5px 10px;
  margin-right: 10px;
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  line-height: 22.5px;
  letter-spacing: 0.02em;
  text-align: center;
}

.filter button.active {
  background-color: rgba(205, 162, 116, 1);
  color: rgb(255, 255, 255);
  border: 1px solid #ccc;
}

.item {
  padding: 10px;
  height: auto;
  position: relative;
}
.item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.item button {
  width: 70px;
  height: 70px;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 0.6s ease-in-out;
  border: none;
}
.item button:hover {
  transform: scale(1.08);
  outline: none;
  background-color: rgba(0, 255, 255, 0.255);
  border: none;
}

.item button img {
  width: 8px;
  height: 18px;
}
.item-desc {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}
h4 {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  letter-spacing: 0.02em;
  text-align: left;
}
p {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}
.item-desc > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.pagination {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}
.pagination > button {
  box-sizing: border-box;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: transparent;
  padding: 14px;
  border: 1px solid rgba(205, 162, 116, 1);
  justify-content: center;
}

.pagination > button.active {
  background-color: rgba(244, 240, 236, 1);
}
</style>
