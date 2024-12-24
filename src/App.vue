<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HederPanel from './components/header/HeaderPanel.vue';
import PageFooter from './components/footer/PageFooter.vue';
</script>

<template>
  <HederPanel/>
  <RouterView />
  <PageFooter/>
</template>

