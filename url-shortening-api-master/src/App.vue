<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import AppHeader from './components/AppHeader.vue';
import Hero from './components/Hero.vue';
import Shorten from './components/Shorten.vue';
import Statistics from './components/Statistics.vue';
import Boost from './components/Boost.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>
  <AppHeader />
  <Hero title="More than just shorter links" />
  <Shorten />
  <Statistics />
  <Boost />
  <AppFooter />
</template>
