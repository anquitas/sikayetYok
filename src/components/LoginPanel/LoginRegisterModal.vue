<template>
<dialog class="modal" open>
    <div class="modal-box">
      <h3 class="text-lg font-bold text-center">Giriş Yap!</h3>
    
      <FormContainer>
        <LoginForm/>
      </FormContainer>
    </div>
    <form method="dialog" class="modal-backdrop">
    <button @click="loginRegisterStore.toggle">close</button>
</form>
</dialog>
</template>

<script setup>
import FormContainer from '../container/FormContainer.vue';
import LoginForm from './LoginForm.vue';

import { useLoginRegisterStore } from '@/stores/LoginRegister';
const loginRegisterStore = useLoginRegisterStore()

</script>

