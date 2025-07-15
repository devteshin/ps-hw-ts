<script setup lang="ts">
import IconPlay from './icons/IconPlay.vue';

const { meditation_id } = defineProps< {meditation_id: number} >();

const emit = defineEmits<{
(e: 'start-meditation', meditation_id: number): void
}>();


</script>

<template>
    <button class="button" @click="emit('start-meditation', meditation_id)">
        <div>Начать</div>
        <IconPlay/>
    </button>
</template>

<style scoped>
    .button {
        width: 111px;
        height: 39px;
        border-radius: 10px;
        background: #253334;
        color: white;
        font-family: Alegreya Sans;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 11px;
    }
</style>
