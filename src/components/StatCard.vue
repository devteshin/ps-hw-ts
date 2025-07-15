<script setup lang="ts">
import StatImage from '@/components/statimages/StatImage.vue';

const { statValue, statName } = defineProps< {statValue?: number, statName?: string} >();

interface StatOptions {
  name: string,
  option: {image_color: string, card_color: string, card_name: string},
};

const statOptions: StatOptions[] = [
  {name: 'total_anxiety', option: {image_color: '#5B2B2C', card_color: '#B0696A', card_name: 'Тревожных дней'}},
  {name: 'total_calm', option: {image_color: '#2B5B33', card_color: '#69B069', card_name: 'Спокойных дней'}},
  {name: 'total_focus', option: {image_color: '#595B2B', card_color: '#9CB069', card_name: 'Фокусированных дней'}},
  {name: 'total_minutes', option: {image_color: '#2B5B54', card_color: '#69B09C', card_name: 'Минут медитации'}},
  {name: 'total_relax', option: {image_color: '#2B505B', card_color: '#69A1B0', card_name: 'Расслабленных дней'}},
]

function getCardOptions(name: string | undefined) {
  const card_option = statOptions.find((o) => o.name === name);
  if (card_option) {
    return card_option.option;
  }
  else {
    return {image_color: '#2B505B', card_color: '#69A1B0', card_name: ''};
  }
};

const {image_color, card_color, card_name} = getCardOptions(statName);

</script>

<template>
  <div class="stat__card" >
    <StatImage class="stat__card-image" :fill-color="image_color"/>
    <div class="stat__card-value">{{ statValue }}</div>
    <div class="stat__card-name">{{ card_name }}</div>
  </div>
</template>

<style scoped>
    .stat__card {
      width: 300px;
      height: 200px;
      opacity: 1;
      border-radius: 20px;
      position: relative;
      background: v-bind('card_color');
    }
    .stat__card-image {
      position: absolute;
      bottom: 0;
    }
    .stat__card-value {
      position: absolute;
      top: 10px;
      right: 20px;
      font-family: Alegreya Sans;
      font-weight: 700;
      font-style: Bold;
      font-size: 80px;
      text-align: right;
      color: white;
    }
    .stat__card-name {
      position: absolute;
      bottom: 20px;
      left: 20px;
      color: white;
    }

</style>
