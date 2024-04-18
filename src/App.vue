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
        { name: 'Главная', links: '/' },
        { name: 'Наши проекты', links: '/project' },
        { name: 'Блог и новости', links: '/blog' },
        { name: 'Выход', links: '/auth' }
      ],
      footer: [
        { name: 'Главная', links: '/' },
        { name: 'Наши проекты', links: '/project' },
        { name: 'Блог и новости', links: '/blog' },
        { name: 'Выход', links: '/auth' }
      ]
    };
  }
};
</script>

<style scoped>
</style>
