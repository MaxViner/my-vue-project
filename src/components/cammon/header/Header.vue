<template>
  <header>
    <router-link to="/"><span>Interno </span> <img src="../../../assets/Logo.svg" alt="Logo" /> </router-link>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/project">Project</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding-left: 18%;
  padding-right: 18%;
  box-sizing: border-box;
}

header nav {
  display: flex;
  gap: 24px;
}
header span {
  font-family: DM Serif Display;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(41, 47, 54, 1);
}
header a {
  text-decoration: none;
  color: rgba(41, 47, 54, 1);
  font-family: Jost;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  transition: 0.5s ease-in-out;
}
header a:hover {
  text-decoration: none;
  color: rgb(0, 179, 211);
  transform: scale(1.04);
}
header img {
  height: 40px;
  margin-right: 10px;
}
</style>

<script>
export default {
  name: 'Header',
};
</script>
