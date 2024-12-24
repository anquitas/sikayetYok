<template>
<button class="btn" @click="loginRegisterStore.toggleIsOpen">Üye Girişi</button>
<LoginRegisterModal v-if="loginRegisterStore.isOpen"/>

</template>

<script setup>
import { useLoginRegisterStore } from '@/stores/LoginRegister';
import LoginRegisterModal from './LoginRegisterModal.vue';
const loginRegisterStore = useLoginRegisterStore()

</script>

