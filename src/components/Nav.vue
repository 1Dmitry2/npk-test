<template>
  <div class="nav-wrapper">
    <router-link to="/" class="logo">
      <img style="width: 30px;" src="/public/computer.png" alt="logo">
      <span>Interno</span>
    </router-link>
    <div class="nav">
      <nav>
        <ul>
          <li v-for="navItem in nav" :key="navItem.name">
            <router-link :to="navItem.links">
              {{ navItem.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: Array
  }
}
</script>

<style scoped>
ul li{
  list-style: none;
  padding: 0;
  margin: 0;
}
ul{
  display: flex;
  gap: 30px;
  align-items: center;
}
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
  color: #292F36;

  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 25px */
}
.nav-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo span{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 50px */
}
</style>
