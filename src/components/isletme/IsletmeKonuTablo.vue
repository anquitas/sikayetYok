<template>
  <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>konu</th>
        <th>sayi</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="item in veriler" :key="item">
        <td>{{item.konu}}</td>
        <td>{{item.sayi}}</td>
      </tr>
      <!-- row 2 -->

    </tbody>
  </table>
</div>
</template>

<script setup >
import { ref } from 'vue';
  const veriler = ref(null)

  veriler.value = [
    {konu: 'ekran kartı', sayi: 23},
    {konu: 'buzdolabi', sayi: 34},
    {konu: 'atari', sayi: 75},
    {konu: 'televizyon', sayi: 34}

  ]

</script>

<style>

</style>