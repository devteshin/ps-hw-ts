<script setup lang="ts">
import FillingButtons from '@/components/FillingButtons.vue';
</script>

<template>
    <div class="fillings">
        <div class="fillings__avatar">
            <img src="/public/avatar.png" alt="Изображение пользователя">
        </div>
        <div class="fillings__welcome">
            Добро пожаловать, Наталья!
        </div>
        <div class="fillings__question">
            Как вы сегодня себя чувствуете?
        </div>
        <div class="fillings__buttons">
            <FillingButtons />
        </div>


    </div>
</template>

<style scoped>
    .fillings {
        display: flex;
        flex-direction: column;
        padding-left: 50px;
    }
    .fillings__avatar{
        height: 129px;
        width: 129px;
        margin-bottom: 30px;
    }
    .fillings__welcome {
        font-weight: 500;
        font-size: 30px;
        margin-bottom: 2px;
    }
    .fillings__question {
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 39px;
    }
    .fillings__buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>