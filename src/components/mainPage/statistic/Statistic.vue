<template>
  <section class="Statistic">
    <ul>
      <li>
        <h4>12</h4>
        <p>Years Of Experiance</p>
      </li>
      <li>
        <h4>85</h4>
        <p>Success Project</p>
      </li>
      <li>
        <h4>15</h4>
        <p>Active Project</p>
      </li>
      <li>
        <h4>95</h4>
        <p>Happy CUstomers</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Statistic',
};
</script>

<style scoped>
.Statistic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 457px;
  background-color: rgba(244, 240, 236, 1);
}
.Statistic ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 130px;
}
.Statistic ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  height: 155px;
  position: relative;
}
h4 {
  font-family: DM Serif Display;
  font-size: 85px;
  font-weight: 400;
  margin-top: 0px;
  letter-spacing: 0.02em;
  text-align: left;
  color: rgba(205, 162, 116, 1);
  margin-bottom: 0px;
}
.Statistic ul li:not(:last-child)::before {
  content: '';
  position: absolute;
  width: 130px;
  top: 90px;
  right: -130px;
  border: 1px solid rgba(205, 162, 116, 1);
  transform: rotate(-90deg);
  background: rgba(205, 162, 116, 1);
}
p {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  text-align: left;
  color: rgba(77, 80, 83, 1);
  margin-top: 0px;
}
</style>
