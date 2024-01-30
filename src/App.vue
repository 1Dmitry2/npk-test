<template>
  <div class="container">
    <Nav :nav="navItems"/>
    <MainPage/>
    <Footer :footer="footer"/>
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