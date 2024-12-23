<template>
<div class="flex-none gap-2">
  <div class="dropdown dropdown-end">
    <UserPanelAvatar/>
    <UserPanelMenu/>
  </div>
</div> 
</template>

<script setup>
import UserPanelAvatar from './UserPanelAvatar.vue';
import UserPanelMenu from './UserPanelMenu.vue';
</script>

