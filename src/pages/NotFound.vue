<template>
<div class="page">

  <div class="text">
    <h1>404</h1>
    <p>К сожалению, запрашиваемая страница не существует.</p>
    <router-link to="/">
            <button>Back To Home <img src="../assets/images/arrowRigth.svg" alt="arrowRigth" /></button>
    </router-link>

  </div>
    <img src="../assets/notf.svg" alt="">
</div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.text
  h1{
    font-family: DM Serif Display;
font-size: 250px;
font-weight: 400;
line-height: 312.5px;
text-align: left;
color:rgba(205, 162, 116, 1);

  }
.text p{
  font-family: DM Serif Display;
font-size: 35px;
font-weight: 400;
line-height: 52.5px;
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
.page > img{
  position: absolute;
  right: 0;
  top:0;
  height: 100%;
}
.page{
  height: 80vh;
  width: 100%;
  position: relative;
}

</style>
