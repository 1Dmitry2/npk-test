<template>
  <div>
    <main class="bg"></main>
    <section class="container">
      <h4 class="text">Minimal Look Bedrooms</h4>
      <p class="text-descr">{{ text1 }}</p>
      <p style="padding: 60px 0px" class="text-descr">{{ text2 }}</p>
      <div style="padding-bottom: 100px">
        <slider :images="sliderImages" />
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "./components/Slider.vue";

export default {
  components: {Slider},
  data() {
    return {
      text1: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n\n\n

      `,
      text2:`In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
      sliderImages: [
        'public/Photo.png',
        'public/Photo.png',
        'public/Photo.png',
      ],
    };

  },
};
</script>

<style scoped>
.bg {
  background: url("public/bg-pr-det.jpg");
  height: 500px;
  background-repeat: no-repeat;
}

.text {
  color: #292f36;
  font-family: "DM Serif Display";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
  text-align: center;
}

.text-descr {
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
  max-width: 560px;
  margin: 0 auto;
}
</style>
