<template>
<section class="Wrapper">
      <img src="./Banner.svg" alt="Banner" class="banner" />

      <div class="slider-container" >
        <div class="slider" style="display: flex; transition: transform 0.3s;" 
            :style="{ transform: 'translateX(-' + currentSlide * 100 + '%)' }">     
          <div
            v-for="(slide, index) in slides"
            :key="index"
            :class="{ slide, active: index === currentSlide }"
          >
            <div class="slide-content">
              <h4>{{ slide.description }}</h4>
              <p v-if="index === currentSlide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis harum possimus temporibus voluptas nostrum dicta suscipit accusantium. Nam unde placeat delectus cupiditate illum incidunt? Magnam sapiente provident iste at?

              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quidem dicta obcaecati nobis nemo nesciunt non! Voluptatibus labore repellat quis ex asperiores quos dolores nostrum possimus animi, iure voluptate molestias.
              </p>
              <div v-if="index === currentSlide">
                <p>{{ slide.type }}</p>
                <div class="slider-img">
                  <button class="slider-img-btn">
                    <img src="../../assets/images/zoom.svg" alt="" />
                  </button>
                  <img :src="slide.image" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-navigation">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="changeSlide(index)"
            :class="{ 'nav-button': true, active: index === currentSlide }"
          ></button>
        </div>
      </div>
</section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Slider',
computed: {
  ...mapState('proj', ['project']),
  slides() {
    return [this.project, this.project, this.project];
  }
},
  data() {
    return {
      currentSlide: 0,
    };
  },
 methods: {
  changeSlide(index) {
    if (index >= 0 && index < this.slides.length) {
      this.currentSlide = index;
    } else {
      this.currentSlide = 0;
    }
  }
}
}
</script>

<style>
.Wrapper{
  margin-bottom: 120px;
}
.slider-container{
  height: 100%;
  width: 100%;
}
.Slider {
  display: flex;
}
h4{
  font-family: DM Serif Display;
font-size: 50px;
font-weight: 400;
line-height: 62.5px;
letter-spacing: 0.02em;
text-align: left;

}
.active {
  display: block;
}
.slide-content {
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
}
.slide-content >p{
font-family: Jost;
font-size: 22px;
font-weight: 400;
line-height: 33px;
letter-spacing: 0.01em;
text-align: left;
max-width: 60%;
margin: 0 auto;

}


.slide {
    flex: 1 0 100%;
  padding: 50px;
  display: none;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: left;
  color: rgba(41, 47, 54, 1);
}


.slide.active {
  display: block;
}

.slider-navigation {
  margin-top: 20px;
  text-align: center;
}

.nav-button {
  width: 15px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  background: transparent;
  display: inline-block;
  margin: 5px;
  border: 1px solid black;
  cursor: pointer;
}
.nav-button:hover {
  border: 1px solid black;
  outline: none;
}
.slider-img {
  position: relative;
  width:1200px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0 auto;

}
.slider-img >img{
  width: 90%;
  height: 90%;
  margin: 0 auto;
  border-radius: 50px;
}
.slider-img-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background: whitesmoke;
  transition: 0.5 ease-in-out;
  border: none;
  transform: translate(-50%, -50%);
}
.slider-img-btn :hover {
  outline: none;
  transform: scale(1.14);
  border: none;
}
.nav-button.active {
  background: black;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
