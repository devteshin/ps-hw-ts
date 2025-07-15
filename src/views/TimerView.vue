<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
import ButtonBackspaceMeditation from '@/components/icons/ButtonBackspaceMeditation.vue';
import ButtonPauseMeditation from '@/components/icons/ButtonPauseMeditation.vue';
import ButtonRepeatMeditation from '@/components/icons/ButtonRepeatMeditation.vue';
import ButtonStartMeditation from '@/components/icons/ButtonStartMeditation.vue';
import ButtonStopMeditation from '@/components/icons/ButtonStopMeditation.vue';
import type { Meditation } from '@/interfaces/meditation.interface';
import { useMeditationStore } from '@/stores/meditations.store';
import { useStatStore } from '@/stores/stats.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const statStore = useStatStore();
const meditationStore = useMeditationStore();
const route = useRoute();
let meditation = <Meditation | undefined>{};
const timerStatus = ref<string>();
const timer = ref<number>(0);

function getTimerString() {
  return Math.floor(timer.value/60).toString() + ":" + (timer.value % 60).toString().padStart(2, "0");
};

function intervalFunction() {
  if (timerStatus.value != "start") {
    return;
  }
  if (timer.value === 0) {
    timerStatus.value = "complite"
  } else {
    timer.value--
  }
};

let interval = 0;

watch(() => meditationStore.meditations, () => {
  timerInit();
});


function timerInit() {
  if (meditationStore.meditations.length == 0) {
    meditationStore.fetchMeditations();
    return;
  }
  meditation = meditationStore.meditations.find((m) => m.id.toString() == route.params.id)
  if (!meditation) {
    return;
  };
  timer.value = meditation.duration_min * 60;;
  timerStatus.value = 'standby';
  clearInterval(interval);
  interval = setInterval(intervalFunction, 1000);
};

function compliteMeditation() {
  if (!meditation) {
    return
  };
  clearInterval(interval);
  statStore.setDuration(meditation.duration_min);
  timerInit();
};

function startMeditation() {
  if (!meditation) {
    return
  };
  timerStatus.value = "start";
};

function pauseMeditation() {
  timerStatus.value = "pause";
};

function backspaceMeditation() {
  timerInit();
};

function repeatMeditation() {
  if (timerStatus.value == 'complite') {
    timerInit();
  };
};

onMounted(() => {
  timerInit();
});


</script>

<template>
    <div>
      <HeaderMenu />
    </div>
    <div class="timer" v-if="meditation">
      <div class="timer__circle">
        {{ getTimerString() }}
      </div>
      <div class="timer__info">
        <div class="timer__title">{{ meditation.title }}</div>
        <div class="timer__description">{{ meditation.description }}</div>
      </div>
      <div class="timer__action">
        <ButtonBackspaceMeditation @click="backspaceMeditation"/>
        <ButtonPauseMeditation v-show="timerStatus=='start'" @click="pauseMeditation"/>
        <ButtonStartMeditation v-show="timerStatus=='standby' || timerStatus=='pause'" @click="startMeditation"/>
        <ButtonStopMeditation v-show="timerStatus=='complite'" @click="compliteMeditation"/>
        <ButtonRepeatMeditation @click="repeatMeditation"/>
      </div>
    </div>
</template>

<style scoped>
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 27px;
  min-height: calc(100vh - 170px);
  color: white;
}
.timer__circle {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: url("/timer_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Alegreya Sans;
  font-weight: 400;
  font-size: 44px;
}
.timer__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.timer__title {
  font-weight: 500;
  font-size: 35px;
  line-height: 100%;
  height: 48px;
}
.timer__description {
  font-weight: 400;
  font-size: 25px;
  line-height: 100%;
  height: 30px;
}
.timer__action {
  display: flex;
  align-items: center;
  gap: 25px;
}
</style>
