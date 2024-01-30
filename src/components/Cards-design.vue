<template>
  <div class="flex">
  <div  v-for="CardsItem in CardsDesign" :key="CardsItem.id">
    <div class="design-shadow">
      <div class="desing-items">
        <div class="design-img">
          <img :src="CardsItem.img" :alt="CardsItem.tag">
          <div class="design-tag">
          <p class="tag">{{CardsItem.tag}}</p>
          </div>
        </div>
        <h4 class="design-title">{{CardsItem.title}}</h4>
        <div class="design-footer">
          <div>
            <span class="design-date">{{CardsItem.date}}</span>
          </div>
          <div>
            <router-link :to="CardsItem.links">
              <img src="/public/step.svg" alt="step">
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props:{
    CardsDesign: Array
  }
}
</script>

<style  scoped>
.flex{
  display: flex;
  gap: 30px;
  justify-content: center;
}
.design-shadow{
  border-radius: 62px;
  border: 1px solid #E7E7E7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  padding: 21px;
  height: 521px;
  align-items: center;
}
.design-img{
  position: relative;
}
.design-tag{
  position: absolute;
  bottom: 20px;
  left: 20px;
  border-radius: 8px 8px 8px 0px;
  background: #FFF;
  padding: 0px 15px;
}
.tag{
  color: #4D5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.design-title{
  max-width: 285px;
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.design-date{
  color: #4D5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.design-footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>