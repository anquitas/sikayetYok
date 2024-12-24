//## IMPORTS --- --- ---
import { defineStore } from "pinia";
import { ref } from "vue";


// EXPORTS --- --- ---

export const useUserAuthStore = defineStore(
  'userAuth',
  () => {
    const loginState = ref(true)
    const toggleloginState = () => loginState.value = !loginState.value
    const userInfo = {}
    const loginUser = (loginInfo) => { 
      userInfo = loginInfo 
      loginState = true
    }
    return { loginState, userInfo, toggleloginState, loginUser }
  }
)