<script setup lang="ts">
import FeelingsPane from '@/components/FeelingsPane.vue';
import MeditationCard from '../components/MeditationCards.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';

</script>

<template>
  <div  class="app">
    <div>
      <HeaderMenu />
    </div>
    <div class="main-pane">
        <div class="left-pane">
            <FeelingsPane />
        </div>
        <div class="right-pane">
            <MeditationCard/>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;
    color: white;
  }
  .main-pane {
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 170px);
  }
  .right-pane {
    min-width: calc(100% - 500px);
  }
  .left-pane {
    width: 500px;
  }

</style>
