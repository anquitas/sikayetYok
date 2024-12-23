<template>
<LoginRegister v-if="!userAuth.loginState"/>
<UserPanel v-if="userAuth.loginState"/>
</template>

<script setup>
import LoginRegister from '../LoginPanel/LoginRegister.vue';
import UserPanel from '../userPanel/UserPanel.vue';

import { useUserAuthStore } from '@/stores/userAuth';
const userAuth = useUserAuthStore()
</script>
