<template>
  <section class="News">
    <h1>Articles & News</h1>
    <p>
      It is a long established fact that a reader will be distracted by the of readable content of a page when lookings
      at its layouts the points of using.
    </p>
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
  name: 'News',
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
      ],
    };
  },
};
</script>
<style scoped>
.News {
  width: 100%;
  margin-bottom: 96px;
}
.News-list {
  display: flex;
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
</style>
