<template>
<dialog class="modal" open>
    <div class="modal-box">
      <h3 class="text-lg font-bold text-center">Giriş Yap!</h3>
        <div class="btn" @click="butonDegis">{{butonYazi}}</div>
    <div v-if="girisMi" >  
      <FormContainer> 
        <LoginForm/>
      </FormContainer>
    </div>
    
    <div v-else>  
      <FormContainer> 
        <RegisterForm/>
      </FormContainer>
    </div>

     
    </div>
    <form method="dialog" class="modal-backdrop">
    <button @click="closeModal">close</button>
</form>
</dialog>
</template>

<script setup>
import FormContainer from '../container/FormContainer.vue';
import LoginForm from './LoginForm.vue';

import { useLoginRegisterStore } from '@/stores/LoginRegister';
import RegisterForm from './RegisterForm.vue';
import { computed, ref } from 'vue';
const loginRegisterStore = useLoginRegisterStore()
const closeModal = () => {loginRegisterStore.toggleIsOpen()}
const girisMi = ref(true)
const butonYazi = computed(() => girisMi.value ? 'üye ol' : 'giriş yap');

const butonDegis = () => {
  girisMi.value = !girisMi.value
} 
</script>

