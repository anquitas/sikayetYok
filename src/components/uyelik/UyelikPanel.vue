<template>
<LoginRegister v-if="!isLoggedIn"/>
<UserPanel v-if="isLoggedIn"/>
</template>

<script setup>
import { computed } from 'vue';
import LoginRegister from '../LoginPanel/LoginRegister.vue';
import UserPanel from '../userPanel/UserPanel.vue';

import { useUserAuthStore } from '@/stores/userAuth';
const userAuth = useUserAuthStore()

const isLoggedIn = computed(() => userAuth.loginState);

</script>
