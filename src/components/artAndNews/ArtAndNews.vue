<script>
export default {
  name: 'ArtAndNews',
  data() {
    return {
      newsItems: [
        {
          category: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
        },
        {
          category: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December, 2022',
        },
        {
          category: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December, 2022',
        },
        {
          category: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
        },
        {
          category: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December, 2022',
        },
        {
          category: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December, 2022',
        },
      ],
    };
  },
  computed: {
    activePage() {
      return this.$store.state.paginationNews.activePage;
    },
    totalPages() {
      return 3;
    },
  },
  methods: {
    setActivePage(pageNumber) {
      this.$store.commit('paginationNews/setActivePage', pageNumber);
    },
  },
};
</script>

<template>
  <section class="news">
    <img src="./Banner.svg" alt="Banner" class="banner" />

    <article>
      <h3>Latest Post</h3>
      <div class="news-lates">
        <div class="news-lates-img">
          <img src="./top.svg" alt="preview" />
        </div>
        <div class="news-lates-text">
          <h4>Low Cost Latest Invented Interior Designing Ideas</h4>
          <p>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to
            popular belief.
            <br />
            Lorem Ipsum is not simply random text. It has roots in a piece of classica.
          </p>

          <div class="news-lates-date">
            <span> 26 December,2022 </span>
            <router-link to="/news">
              <button>
                <img src="../../assets/images/Rightbracket.svg" alt="Rightbracket" />
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </article>

    <div class="News">
      <h1>Articles & News</h1>

      <ul class="News-list">
        <li class="News-list-item" v-for="(item, index) in newsItems" :key="index">
          <div class="News-list-item-img">
            <img :src="`/news/item${index + 1}.svg`" alt="" />
            <span>{{ item.category }}</span>
          </div>
          <p>{{ item.title }}</p>
          <div class="News-list-item-desc">
            <date>{{ item.date }}</date>
            <router-link to="/news">
              <button>
                <img src="../../assets/images/Rightbracket.svg" alt="Rightbracket" />
              </button>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
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

h3 {
  margin-top: 200px;
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: left;
}

.news {
  padding: 50px;
}
.news-lates {
  display: grid;
  grid-template-columns: 50% 40%;
  gap: 24px;
}
.news-lates-img {
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
}
.news-lates-img img {
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
}
.news-lates-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}
h4 {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: left;
  color: rgba(77, 80, 83, 1);
}
.news-lates-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.news-lates-date button {
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

.news-lates-date button :hover {
  transform: scale(1.08);
  outline: none;
  border: none;
}

.news-lates-date > button img {
  width: 8px;
  height: 18px;
}
.News {
  width: 100%;
  margin-bottom: 96px;
  text-align: left;
}
.News-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  justify-content: center;
  gap: 27px;
  box-sizing: border-box;
}
.News-list-item {
  box-sizing: border-box;
  width: 382px;
  border-radius: 30px;
  border: 1px solid rgba(231, 231, 231, 1);
  padding-bottom: 26px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.News-list-item p {
  box-sizing: border-box;

  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  text-align: left;
  color: rgba(41, 47, 54, 1);
  width: 80%;
  margin-left: 20px;
}
.News-list-item:hover {
  background-color: rgba(244, 240, 236, 1);
}
.News-list-item-img {
  box-sizing: border-box;
  position: relative;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.News-list-item-img > img {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  position: relative;
  margin: 20px;
}
.News-list-item-img > span {
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  position: absolute;
  left: 40px;
  bottom: 44px;
  background-color: white;
  padding: 5px;
}
.News-list-item button {
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
.News-list-item button:hover {
  transform: scale(1.08);
  outline: none;
  background-color: rgba(0, 255, 255, 0.255);
  border: none;
}

.News-list-item > button img {
  width: 8px;
  height: 18px;
}
.News-list-item-desc {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
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
