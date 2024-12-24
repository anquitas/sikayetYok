import { defineStore } from "pinia";
import { ref } from "vue";


export const useLoginRegisterStore = defineStore(
  'loginRegister',
  () => {
    const isOpen = ref(false)
    const toggleIsOpen = () => isOpen.value = !isOpen.value

    return {isOpen, toggleIsOpen}
  }
)