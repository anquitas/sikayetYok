//## IMPORTS --- --- ---
import { defineStore } from "pinia";
import { ref } from "vue";


// EXPORTS --- --- ---

export const useUserAuthStore = defineStore(
  'userAuth',
  () => {
    const loginState = ref(true)
    const toggleloginState = () => loginState.value = !loginState.value
    const userInfo = {isim: 'monica', soyisim: 'geller', eposta: 'monica@perk.com'}
    return { loginState, userInfo, toggleloginState }
  }

)