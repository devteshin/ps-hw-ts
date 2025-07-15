<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
import StatCard from '@/components/StatCard.vue';
import { useStatStore } from '@/stores/stats.store';
import { onMounted } from 'vue';

const store = useStatStore();

onMounted(() => {
    store.fetchStat();
});


</script>

<template>
    <div class="stat">
        <div class="menu">
          <HeaderMenu />
        </div>
        <div class="stat__cards">
          <div v-for="(value, name, index) in store.stat" :key="index">
              <StatCard :stat-name="name" :stat-value="value" />
          </div>
        </div>
    </div>
</template>

<style scoped>
    .stat {
        display: flex;
        flex-direction: column;
    }
    .stat__cards {
        min-height: calc(100vh - 170px);
        width: 100%;
        padding-left: 150px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 260px);
    }
</style>
