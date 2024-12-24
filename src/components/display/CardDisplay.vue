<template>
  <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{{baslik}}</h2>
    <slot></slot>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
</template>

<script setup>
defineProps({
  baslik: String,
});
</script>

<style>

</style>