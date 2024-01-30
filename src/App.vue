<template>
  <div>
    <div class="container">
      <Nav :nav="navItems" />
    </div>
    <router-view></router-view>
    <div class="container">
      <Footer :footer="footer" />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Footer, Nav },
  data() {
    return {
      navItems: [
        { name: 'Home', links: '/' },
        { name: 'Project', links: '/project' },
        { name: 'Blog', links: '/blog' }
      ],
      footer: [
        { name: 'Home', links: '/' },
        { name: 'Project', links: '/project' },
        { name: 'Blog', links: '/blog' }
      ]
    };
  }
};
</script>

<style scoped>
</style>
