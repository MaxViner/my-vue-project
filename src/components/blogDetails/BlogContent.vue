<template>
<section>
            <img src="./Banner.svg" alt="Banner" class="banner" />

  <div class="BlogContent">

    <div class="BlogContent-body">
      <h2>Let’s Get Solution for Building Construction Work</h2>
      <div class="BlogContent-body-img">
        <img src="./topContent.svg" alt="photo" />
        <div class="BlogContent-body-img-desc">
          <span>26 December,2022 </span>
          <span>Interior / Home / Decore</span>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
        belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing
        hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
        necessary.
      </p>
      <div class="quotation">
        <img src="./quotation.svg" alt="quotation" />
        <p>The details are not the details. They make the design.</p>
      </div>

      <h2>Design sprints are great</h2>
      <ol>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur blanditiis, ipsa velit tempore
          odio maxime ut perferendis doloribus in recusandae. Esse delectus consequuntur eos aut quam obcaecati,
          officiis corrupti.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati maiores veniam quidem officiis alias eum,
          quis incidunt autem quos natus perferendis, explicabo excepturi neque accusamus minus quasi rem, ipsa placeat.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi debitis magni magnam eos exercitationem veniam
          accusantium deleniti enim ipsum consectetur, omnis, numquam quis sint ea perspiciatis quia mollitia sequi
          itaque!
        </li>
      </ol>

      <img src="./SubContent.svg" alt="SubContent" />
      <p>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
        belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
      </p>
    </div>

    <div class="BlogContent-tags">
      <h4>Tags</h4>
      <div class="BlogContent-tags-row">
        <div>
          <input
            type="checkbox"
            id="kitchen"
            :value="selected"
            @change="select('kitchen')"
            v-model="selected"
            style="display: none"
          />
          <label for="kitchen" :class="{ active: selected === 'kitchen' }">Kitchen</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="bedroom"
            :value="selected"
            @change="select('bedroom')"
            v-model="selected"
            style="display: none"
          />
          <label for="bedroom" :class="{ active: selected === 'bedroom' }">Bedroom</label>
        </div>
      </div>

      <div class="BlogContent-tags-row">
        <div>
          <input
            type="checkbox"
            id="building"
            :value="selected"
            @change="select('building')"
            v-model="selected"
            style="display: none"
          />
          <label for="building" :class="{ active: selected === 'building' }">Building</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="architecture"
            :value="selected"
            @change="select('architecture')"
            v-model="selected"
            style="display: none"
          />
          <label for="architecture" :class="{ active: selected === 'architecture' }">Architecture</label>
        </div>
      </div>

      <div class="BlogContent-tags-row">
        <div>
          <input
            type="checkbox"
            id="kitchen-planning"
            :value="selected"
            @change="select('kitchen-planning')"
            v-model="selected"
            style="display: none"
          />
          <label for="kitchen-planning" :class="{ active: selected === 'kitchen-planning' }">Kitchen Planning</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="bedroom"
            :value="selected"
            @change="select('bedroom')"
            v-model="selected"
            style="display: none"
          />
          <label for="bedroom" :class="{ active: selected === 'bedroom' }">Bedroom</label>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  name: 'BlogContent',
  methods: {
    select(option) {
      this.$store.dispatch('checkboxes/selectCheckbox', option);
    },
  },
  computed: {
    selected: {
      get() {
        return this.$store.getters['checkboxes/getSelectedCheckbox'];
      },
      set(option) {
        this.$store.dispatch('checkboxes/selectCheckbox', option);
      },
    },
  },
};
</script>

<style scoped>
.BlogContent {
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 800px 400px;
  margin: 200px auto;
  color: rgba(41, 47, 54, 1);
  padding: 0;
  padding-left: 9%;
}
.BlogContent h2 {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  letter-spacing: 0.02em;
  text-align: left;
}
.BlogContent p {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}
.BlogContent img {
  border-radius: 30px;
}
.BlogContent-tags {
  margin-left: 52px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 290px;
  gap: 0px;
}
.BlogContent-tags h4 {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  letter-spacing: 0.02em;
  text-align: left;
}

.BlogContent-body-img-desc {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
  margin-bottom: 48px;
}
.BlogContent-body-img-desc span {
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
}
.BlogContent-tags-row {
  display: flex;
  flex-wrap: nowrap;
}
.Board img {
  width: 100%;
  height: 100%;
}
label {
  display: flex;
  border-radius: 10px;
  background: rgba(244, 240, 236, 1);
  padding: 10px 20px;
  margin: 5px;
  border: 1px solid #000;
  cursor: pointer;
}

label.active {
  background-color: black;
  color: white;
}

.quotation {
  width: 799px;
  height: 267px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 53px 0px 0px 0px;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
  line-height: 31.25px;
  letter-spacing: 0.02em;
  text-align: center;
  border-radius: 50px;
  color: rgba(205, 162, 116, 1);
  background: rgba(244, 240, 236, 1);
}
.quotation p {
  width: 325px;
  text-align: center;
}
.quotation img {
  width: 106px;
  height: 131px;
}
ol {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  counter-reset: list;
  padding-left: 0;
}
ol li {
  text-align: left;
}
ol li::before {
  content: counter(list) '. ';
  counter-increment: list;
  color: rgba(205, 162, 116, 1);
  font-weight: bold;
}
</style>
