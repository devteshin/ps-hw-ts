<script setup lang="ts">
import { useMeditationStore } from '@/stores/meditations.store';
import { onMounted } from 'vue';
import ButtonStart from './ButtonStart.vue';
import { useRouter } from 'vue-router';

const store = useMeditationStore();
const router = useRouter();

onMounted(() => {
    store.fetchMeditations();
});

function redirectToTimer(meditation_id: number) {
  router.push({name: 'timer', params: {id: meditation_id}});
};

</script>

<template>
    <div class="cards-wraper">
        <div class="card" v-for="item in store.meditations" :key="item.id">
            <div class="title">{{ item.title }}</div>
            <div class="description">{{ item.description }}</div>
            <div class="button-wrap">
                <ButtonStart @start-meditation="redirectToTimer" :meditation_id="item.id"/>
                <div>{{ item.duration_min }} мин</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .cards-wraper {
        display: grid;
        grid-template-columns: 339px 339px;
        grid-template-rows: 170px 170px;
        gap: 20px;
    }
    .card {
        width: 339px;
        height: 170px ;
        border-radius: 20px;
        background: var(--color-bg-card);
        color: black;
    }
    .title {
        font-weight: 500;
        font-size: 25px;
        line-height: 100%;
        margin: 22px 30px 0;
    }
    .description {
        font-weight: 500;
        font-size: 15px;
        line-height: 100%;
        margin: 5px 30px;
    }
    .button-wrap {
        margin: 16px 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>
