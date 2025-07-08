<script setup lang="ts">
import FeelingButtons from '@/components/FeelingButtons.vue';
import { useProfileStore } from '@/stores/profile.store';
import { onMounted } from 'vue';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});


</script>

<template>
    <div class="feelings">
        <div class="feelings__avatar">
            <img src="/public/avatar.png" alt="Изображение пользователя">
        </div>
        <div v-if="store.profile" class="feelings__welcome">
            Добро пожаловать, {{ store.profile.username }} !
        </div>
        <div class="feelings__question">
            Как вы сегодня себя чувствуете?
        </div>
        <div class="feelings__buttons">
            <FeelingButtons />
        </div>


    </div>
</template>

<style scoped>
    .feelings {
        display: flex;
        flex-direction: column;
        padding-left: 50px;
    }
    .feelings__avatar{
        height: 129px;
        width: 129px;
        margin-bottom: 30px;
    }
    .feelings__welcome {
        font-weight: 500;
        font-size: 30px;
        margin-bottom: 2px;
    }
    .feelings__question {
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 39px;
    }
    .feelings__buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
