<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';

</script>

<template>
    <div class="stat">
        <div class="menu">
          <HeaderMenu />
        </div>
        <div class="stat-cards">
            Статистика
        </div>
    </div>
</template>

<style scoped>
    .stat {
        display: flex;
        flex-direction: column;
        color: white;
    }
    .stat-cards {
        min-height: calc(100vh - 170px);
    }
</style>