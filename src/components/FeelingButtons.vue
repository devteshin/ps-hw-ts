<script setup lang="ts">
import { useStatStore } from '@/stores/stats.store';
import FeelingItem from './FeelingItem.vue';

const FEELINGS_OPTIONS = [
  {name: "Спокойно", option: "feeling_calm" },
  {name: "Расслабленно", option: "feeling_relax" },
  {name: "Фокусированно", option: "feeling_focus" },
  {name: "Тревожно", option: "feeling_anxiety" },
];

const store = useStatStore();

function sendFeeling(feeling: string | undefined) {
  if (!feeling) {
    return;
  };
  const option = FEELINGS_OPTIONS.find((f) => f.name === feeling)?.option;
  console.log(FEELINGS_OPTIONS.find((f) => f.name === feeling)?.option);
  if (option) {
    store.setFeeling(option);
  };
};

</script>


<template>
    <div class="buttons-pane">
      <FeelingItem v-for="item in FEELINGS_OPTIONS" :key="item.option" :icon-name="item.name" @feeling="sendFeeling" />
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
