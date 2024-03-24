<template>
  <footer>
    <div class="footer-grid">
      <div>
        <span> Interno <img src="../../../assets/Logo.svg" alt="Logo" /> </span>
        <p>
          It is a long established fact that a reader <br />
          will be distracted lookings.
        </p>
        <p>
          <img src="../../../assets/images/social/th.svg" alt="" />
          <img src="../../../assets/images/social/twit.svg" alt="" />
        </p>
      </div>

      <div>
        <h4>pages</h4>
        <a href="">Home</a>
        <a href="/project">Progect</a>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <h4>Contact</h4>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201 contact@interno.com (123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>

<style>
.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding-left: 18%;
  padding-right: 18%;
  box-sizing: border-box;
}
.footer-grid > div {
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;

  gap: 18px;
  justify-content: flex-start;
  text-align: left;
  flex-direction: column;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: rgba(41, 47, 54, 1);
}
.footer-grid > div > * {
  margin: 0;
  padding: 0;
}
.footer-grid > div img {
  margin-right: 14px;
}
.footer-grid > div span {
  font-family: DM Serif Display;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 0px;
  text-align: left;
}
.footer-grid > div p {
  margin-top: 0px;
}
.footer-grid a {
  margin-top: 0px;
  text-decoration: none;
  font-family: Jost;
  color: rgba(41, 47, 54, 1);
  transition: 0.5s ease-in-out;
}
.footer-grid h4 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.footer-grid a:hover {
  text-decoration: none;
  color: rgb(0, 179, 211);
  transform: scale(1.04);
}
</style>
