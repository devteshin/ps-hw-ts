<script setup lang="ts">
    const { size = 75 } = defineProps<{ size?: number }>();

</script>

<template>
    <button class="button-icon" :style="{ width: `${size}px`, height: `${size}px`} ">
        <slot />
    </button>
</template>

<style scoped>
    .button-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        cursor: pointer;
        border-radius: 50%;
        border: none;
    }
    .button-icon:hover {
        background: var(--color-fg-hover);
    }
</style>
