<template>
  <SayfaGrid>
    <template #navMenu>
      <div class="container flex flex-col gap-2">
        <router-link :to="{name: 'profilAyarGenel'}">genel</router-link>
        <router-link to="iletisim">iletisim</router-link>
      </div>
    </template>
    <template #content>
      <router-view/>
    </template>
  </SayfaGrid>
</template>

<script>

import SayfaGrid from '@/components/layout/SayfaGrid.vue';



export default {
  data () {
    return {
      veris: [
        {
        id: 1, 
        soru: 'wibbly wobbly timey wimey', 
        cevap: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
        }
      ],
     

    }
  },
  components: {
    SayfaGrid,
  
  },

}
</script>

<style>

</style>