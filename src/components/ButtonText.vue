<script setup lang="ts">
</script>

<template>
    <button class="button">
        <slot />
    </button>
</template>

<style scoped>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-bg-button);
        cursor: pointer;
        border: none;
        color: white;
        font-size: 25px;
        width: 321px;
        height: 61px;
        border-radius: 10px;
    }
</style>
