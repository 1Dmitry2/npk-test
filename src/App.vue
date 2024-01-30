<template>
  <div>
  <div class="container">
    <Nav style="padding-bottom: 40px" :nav="navItems"/>
  </div>
    <MainPage/>
    <div class="container">
    <Footer :footer="footer"/>
    </div>
    <router-view/>
  </div>
</template>

<script>


import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import MainPage from "./MainPage.vue";

export default {
  components: {MainPage, Footer, Nav },
  data() {
    return {
      navItems: [
        { name: 'Home', links: '/' },
        { name: 'Project', links: '/project' },
        { name: 'Blog', links: '/blog' }
      ],
      footer:[
        { name: 'Home', links: '/' },
        { name: 'Project', links: '/project' },
        { name: 'Blog', links: '/blog' }
      ]
    };
  }
}
</script>

<style scoped>
@import "style.css";
</style>