<template>
  <div v-if="isletme">
    <h1>kullanici bilgi:</h1>


<CardDisplay baslik="İşletme Bilgisi">
    <span>ID: {{ isletme.id }}</span>
    <span>isim: {{ isletme.isim }}</span>
    <span>isim: {{ isletme.soyisim }}</span>
</CardDisplay>
    
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { CkullaniciAl } from '@/functions/kullaniciAl';
import CardDisplay from '@/components/display/CardDisplay.vue';

const route = useRoute(); // Access route information
const isletme = ref(null); // Reactive variable to store user data

const user = computed(() => route.params.id); // Reactive computed property for the user ID

// Fetch user information
const bilgiAl = async () => {
  return await CkullaniciAl(user.value);
};

// Fetch user data on component mount
onMounted(async () => {
  isletme.value = await bilgiAl();
});
</script>
