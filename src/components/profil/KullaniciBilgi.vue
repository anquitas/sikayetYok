<template>
  <div v-if="kullanici">
    <h1>kullanici bilgi:</h1>


<CardDisplay baslik="Kullanıcı Bilgisi">
    <span>ID: {{ kullanici.id }}</span>
    <span>isim: {{ kullanici.isim }}</span>
    <span>isim: {{ kullanici.soyisim }}</span>
</CardDisplay>
    
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { CkullaniciAl } from '@/functions/kullaniciAl';
import CardDisplay from '@/components/display/CardDisplay.vue';

const route = useRoute(); // Access route information
const kullanici = ref(null); // Reactive variable to store user data

const user = computed(() => route.params.id); // Reactive computed property for the user ID

// Fetch user information
const bilgiAl = async () => {
  return await CkullaniciAl(user.value);
};

// Fetch user data on component mount
onMounted(async () => {
  kullanici.value = await bilgiAl();
});
</script>
