<template>
  <section class="Board">
    <div class="wrapper">
      <img src="../../../assets/images/mainPage/banner.svg" alt="Board" />
      <div class="Board-info">
        <h2>Let Your Home Be Unique</h2>
        <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
        <button>Get Started <img src="../../../assets/images/arrowRigth.svg" alt="arrowRigth" /></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.Board {
  box-sizing: border-box;
  width: 82%;
  height: 758px;
  margin: 0 auto;
  padding: 0;
  margin-top: 67px;
}
.wrapper > img {
  width: 100%;
  border-radius: 30px;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
}
.Board-info {
  width: 45%;
  position: absolute;
  top: 208px;
  left: 148px;
  z-index: 3;
}
h2 {
  font-family: DM Serif Display;
  font-size: 65px;
  font-weight: 400;
  line-height: 81px;
  letter-spacing: 0em;
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
button {
  width: 220.14px;
  height: 75px;
  padding: 26px 49px 26px 48px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  background: rgba(41, 47, 54, 1);
  color: rgba(255, 255, 255, 1);
  gap: 10px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
button:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.07);
  color: rgba(41, 47, 54, 1);
  border: none;
  outline: none;
}
</style>

<script>
export default {
  name: 'Banner',
};
</script>
