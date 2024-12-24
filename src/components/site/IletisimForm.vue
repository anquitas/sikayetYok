<template>
  <label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="İsim" v-model="isim" />

</label>
<label class="input input-bordered flex items-center gap-2">
 
  <input type="text" class="grow" placeholder="Soyisim" v-model="soyisim"/>
</label>
<label class="input input-bordered flex items-center gap-2">
  
  <input type="text" class="grow" placeholder="Eposta" v-model="eposta" />
</label>
<label class="input input-bordered flex items-center gap-2">
  
  <textarea class="textarea textarea-bordered" placeholder="Mesaj" v-model="mesaj"></textarea>
</label>

<button class="btn" @click="iletisimYolla">Yükle</button>
</template>

<script setup>
import { ref } from 'vue';

const isim = ref("")
const soyisim = ref("")
const eposta = ref("")
const mesaj = ref("")
const iletisimForm = () => {
  return {
    isim: isim.value,
    soyisim: soyisim.value,
    eposta: eposta.value,
    mesaj: mesaj.value

  }
}

const iletisimYolla = async () => {
  console.log(iletisimForm())
}

</script>

<style>

</style>