<template>
    <div class="projects-item-wrapper">
      <div  v-for="pojectsItem in projects" :key="pojectsItem.id">
        <img style="width: 400px" :src="pojectsItem.img" alt="poject">
        <div class="projects-item">
        <div>
        <p class="projects-text">{{pojectsItem.title}}</p>
        <span class="projects-crumbs">{{pojectsItem.crumbs}}</span>
        </div>
        <div>
          <router-link :to="pojectsItem.links">
            <img style="width: 70px; height: 70px" src="/public/step.svg" alt="step">
          </router-link>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    projects: Array
  }
}
</script>

<style scoped>
.projects-item-wrapper{
  display: flex;
  gap: 105px;
  flex-wrap: wrap;
  justify-content: center;
}
.projects-item{
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  align-items: center;
}
.projects-text{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.projects-crumbs{
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
</style>