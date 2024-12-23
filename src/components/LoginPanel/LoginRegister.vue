<template>
<button class="btn" @click="loginRegisterStore.toggle">Üye Girişi</button>
<LoginRegisterModal v-if="loginRegisterStore.isOpen"/>

</template>

<script setup>
import { useLoginRegisterStore } from '@/stores/LoginRegister';
const loginRegisterStore = useLoginRegisterStore()
import LoginRegisterModal from './LoginRegisterModal.vue';

</script>

