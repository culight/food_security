<template>
  <div id="app">
    <header v-if="!/user/.test($router.currentRoute.fullPath)" id="nav" class="sticky-shrinknav-header">
      <div class="layer"></div>
      <h1 class="sticky-shrinknav-header-title">Social Garden</h1>
      <!-- <h3><i>Helping communities help themselves!</i></h3> -->
      <ul class="menu align-center sticky-shrinknav-menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
      </ul>
    </header>
    <header v-else id="nav">

    </header>

    <div v-if="!/user/.test($router.currentRoute.fullPath)" class="main-body">
      <router-view />
    </div>

    <router-view />

    <app-footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    AppFooter: Footer,
  },
  mounted() {
    console.log(this.$router.currentRoute.fullPath);
  },
};
</script>

<style lang="sass">
@import './styles/index'
</style>
