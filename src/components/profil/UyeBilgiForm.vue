<template>

  <div class="flex flex-col gap-4 preview items-center overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
    <label class="input input-bordered flex items-center gap-2">
      <IconUser/>
      <input type="text" class="grow" placeholder="isim" v-model="isim"/>
    </label>
    <label class="input input-bordered flex items-center gap-2">
      <IconUser/>
      <input type="text" class="grow" placeholder="soyisim" v-model="soyisim"/>
    </label>
    <label class="input input-bordered flex items-center gap-2">
      <IconMail/>
      <input type="text" class="grow" placeholder="Email" v-model="eposta"/>
    </label>
    <div class="h-2 w-12 bg-green-500 text-center cursor-pointer" @click="uyeOl">üyemi</div>
  </div>
  
  </template>
  
  <script setup>
  import IconMail from '@/components/icons/IconMail.vue';
  import IconUser from '@/components/icons/IconUser.vue';
  import { ref } from 'vue';
 
  
  
  const isim = ref('')
  const soyisim = ref('')
  const eposta = ref('')
  
   // store  

  isim.value = "store"
  soyisim.value = "store"
  eposta.value = "store"
  
  </script>
  
  <style>
  
  </style>