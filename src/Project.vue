<template>
  <div>
    <main class="bg">
      <div class="project-item">
        <h4 class="project-text">Our Project</h4>
        <span class="project-crumbs">Home / Project</span>
      </div>
    </main>
    <section class="container">
      <div class="section-button section-button-tabs">
        <button class="tabs-btn">Bathroom</button>
        <button class="tabs-btn active">Bed Room</button>
        <button class="tabs-btn">Kitchan</button>
        <button class="tabs-btn">Living Area</button>
      </div>
      <div class="gallery">
        <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index" :style="{ 'margin-top': item.marginTop }">
          <div style="position: relative">
            <img :src="item.imageSrc" :alt="item.title">
            <div v-if="item.showStar === true" class="star-icon">
              <img src="/public/Star.svg" alt="star">
            </div>
          </div>
          <div class="img-descr">
            <div>
              <p class="text-titles">{{ item.title }}</p>
              <span class="text-crumbs">{{ item.category }}</span>
            </div>
            <router-link :to="item.link">
              <img src="/public/step.svg">
            </router-link>
          </div>
        </div>
      </div>
      <div class="section-button">
        <div class="steps-one steps-text">
          1
        </div>
        <div class="steps steps-text">
          2
        </div>
        <div class="steps steps-text">
          3
        </div>
        <div>
          <img src="/public/steps-or.svg" alt="step">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryItems: [
        { title: 'Minimal Bedroom', category: 'Decor / Artchitecture', imageSrc: '/public/Photo-3.svg', link: '/project-ditails' },
        { title: 'Minimal Bedroom', category: 'Decor / Artchitecture', imageSrc: '/public/Photo-2.svg', link: '/project-ditails',  showStar: true },
        { title: 'Classic Minimal Bedroom', category: 'Decor / Artchitecture', imageSrc: '/public/Photo-1.svg', link: '/project-ditails' },
        { title: 'Modern Bedroom', category: 'Decor / Artchitecture', imageSrc: '/public/Photo.svg', link: '/project-ditails', marginTop: '-330px', showStar: true },
        { title: 'Minimal Bedroom table', category: 'Decor / Artchitecture', imageSrc: '/public/Photo-3.png', link: '/project-ditails' },
        { title: 'System Table', category: 'Decor / Artchitecture', imageSrc: '/public/Photo-2.png', link: '/project-ditails' },
        { title: 'Modern Medroom', category: 'Decor / Artchitecture', imageSrc: '/public/Photo-1.png', link: '/project-ditails' },
        { title: 'Modern Bedroom', category: 'Decor / Artchitecture', imageSrc: '/public/Photo.png', link: '/project-ditails', marginTop: '-330px', showStar: true },
      ]
    };
  }
}
</script>

<style scoped>
.bg{
  background: url("public/project.png") lightgray 50% / cover no-repeat;
  padding-top: 200px;
}
.project-item{
  text-align: center;
  background: white;
  width: 503px;
  margin: 0 auto;
  border-radius: 37px 37px 0px 0px;
  padding: 41px 78px;
}
.project-text{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
}
.project-crumbs{
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.steps{
  border: 1px solid #CDA274;
  border-radius: 100%;
  width: 52px;
  text-align: center;
  padding: 14px 0px;
}
.steps-one{
  background: #F4F0EC;
  border-radius: 100%;
  width: 52px;
  text-align: center;
  padding: 14px 0px;
}
.steps-text{
  color: #292F36;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: capitalize;
}
.section-button{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 40px;
}
.section-button-tabs{
  border-radius: 18px;
  border: 1px solid #CDA274;;
  padding-top: 0px;
  max-width: 980px;
  margin: 200px auto;
}
.tabs-btn{
  padding: 26px 66px;
  border: none;
  background: none;
  cursor: pointer;
  color: #292F36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
}
.active{
  background: #CDA274;
  color: #FFFFFF;
  border-radius: 18px;
}
.text-titles{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.text-crumbs{
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.img-descr{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gallery-item{
  max-width: 580px;
}
.gallery{
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.star-icon {
  position: absolute;
  top: 0;
  right: 0;
}
</style>