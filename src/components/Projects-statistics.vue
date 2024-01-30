<template>
  <div>
    <div class="project-stats">
      <div class="project-stats-item" v-for="StatsItem in ProjStats" :key="StatsItem.numbers">
        <span class="stats-number">{{StatsItem.numbers}}</span>
        <p class="stats-text">{{StatsItem.text}}</p>
        <div class="line"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    ProjStats: Array
  }
}
</script>

<style  scoped>
.stats-number{
  color: #CDA274;
  font-family: "DM Serif Display";
  font-size: 85px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 106.25px */
  letter-spacing: 1.7px;
}
.stats-text{
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.project-stats{
  display: flex;
  text-align: center;
  gap: 76px;
  justify-content: center;
  vertical-align:center;
  padding-top: 151px;
}
.project-stats-item{
  position: relative;
}
.project-stats-item::after{
  content: "";
  position: absolute;
  top: 0;
  left: 120%;
  height: 100%;
  width: 2px;
  background-color: #CDA274;
}
.project-stats-item:nth-last-child(1):after{
  display: none;
}
</style>