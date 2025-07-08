<script setup lang="ts">
const data = defineModel<string>()
</script>

<template>
  <input class="input-string" v-model="data" />
</template>

<style scoped>
  .input-string {
    border: none;
    border-bottom: 1px solid white;
    font-size: 18px;
    font-weight: 400;
    min-width: 300px;
    color: white;
    background: none;
  }
  .input-string::placeholder {
    color: var(--color-fg-inactive);
  }
</style>
