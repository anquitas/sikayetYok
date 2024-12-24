<template>
<label class="input input-bordered flex items-center gap-2">

    <IconMail/> 
  <input 
    type="text" 
    class="grow" 
    placeholder="Email" 
    v-model="eposta" 
  />
</label>
<label class="input input-bordered flex items-center gap-2">
 
   <IconSifre/> 
  <input 
    type="password" 
    class="grow" 
    value="password" 
    placeholder="Parola" 
    v-model="parola"
  />
</label>
<button class="btn" @click="girisIslemi">Giriş</button>
</template>

<script setup>
import IconMail from '@/components/icons/IconMail.vue';
import IconSifre from '@/components/icons/IconSifre.vue';
import { CUyeGiris } from '@/functions/GirisYap';
import { ref } from 'vue';


const eposta = ref('')
const parola = ref('')
const giris_bilgi = () => {
  return {eposta: eposta.value, parola: parola.value}
}

const girisIslemi = async () => {
  console.log( await CUyeGiris(giris_bilgi()))
}
</script>

