<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  const GEMS = window.__GEMS || {};

  window.__GEMS = {
    ...GEMS,
    no_header: true,
    client_id: 'store.my.games',
  };

  const script = document.createElement("script");
  script.src = "//store.my.games/hotbox/leela/header.js";
  document.head.appendChild(script);
})
</script>

<style scoped></style>
