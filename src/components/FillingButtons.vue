<script setup lang="ts">
import FillingItem from './FillingItem.vue';
</script>


<template>
    <div class="buttons-pane">
        <FillingItem icon-name="Спокойно"/>
        <FillingItem icon-name="Расслабленно"/>
        <FillingItem icon-name="Фокусированно"/>
        <FillingItem icon-name="Тревожно"/>
    </div>
</template>

<style scoped>
    .buttons-pane {
        display: flex;
        flex-direction: row;
        justify-content:center ;
        align-items: center ;
        gap: 22px;        
    }
</style>