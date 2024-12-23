<template>
 <ul
    tabindex="0"
    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    <KullaniciBilgi/>
    <hr class="py-2">
    <li v-for="item in menuListe" :key="item.id" >
      <a class="justify-between" :href="item.link">
            {{item.baslik}}
            <span class="badge">New</span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';


const menuListe = ref(null)

menuListe.value = [
  {id: 1, baslik: 'profilim', link:'/kullanici'},
  {id: 2, baslik: 'ayarlar', link:'/ayarlar'},
  {id: 3, baslik: 'geri bildirimlerim', link:'/geribildirimlerim'},
  {id: 4, baslik: 'çıkış yap', link:'/cikisyap'}
]

</script>

