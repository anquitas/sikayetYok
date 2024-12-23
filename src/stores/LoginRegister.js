import { defineStore } from "pinia";
import { ref } from "vue";


export const useLoginRegisterStore = defineStore(
  'LoginRegister',
  () => {
    const isOpen = ref(false)
    const toggle = () => loginRegisterModal.value = !loginRegisterModal.value

    return {isOpen, toggle}
  }
)