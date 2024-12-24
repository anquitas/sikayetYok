<template>
<BaseFooter>
  <FooterList title="services" :linkler="bilgi.servisler"/>
  <FooterList title="Company" :linkler="bilgi.company"/>
  <FooterList title="Legal" :linkler="bilgi.legal"/>
</BaseFooter>
 
</template>

<script setup>
import BaseFooter from './BaseFooter.vue';
import FooterList from './FooterList.vue';

import { ref } from 'vue';
import { FOOTER_BILGI } from '@/constants/siteData';

const bilgi = ref(FOOTER_BILGI)
</script>
