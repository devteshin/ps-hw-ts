<script setup lang="ts">
import MeditationCard from './components/MeditationCards.vue';

const isAuthorized = true;

</script>

<template>
  <div  class="app">
    <div v-if="!isAuthorized" class="start-page">
      Добро пожаловать
    </div>
    <div v-else>
      <div class="main-page">
        <div class="left-pane">Левая панель</div>
        <div class="right-pane">
          <nav class="nav">Меню</nav>
          <div class="meditation-cards">
            <MeditationCard/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-page {
    display: flex;
    flex-direction: row;
    color: white;
  }
  .start-page {
    color: white;
  }
  .right-pane {
    display: flex;
    flex-direction: column;
    min-width: calc(100% - 400px);
  }
  .left-pane {
    width: 400px;
  }
  .nav {
    height: 150px;
  }
  .meditation-cards {
    min-height: calc(100vh - 150px);
  }

</style>
