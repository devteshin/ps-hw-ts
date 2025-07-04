<script setup lang="ts">
import IconCalm from './icons/IconCalm.vue';
import IconFocus from './icons/IconFocus.vue';
import IconRelax from './icons/IconRelax.vue';

defineProps({
  iconName: String
});
</script>

<template>
    <div class="button-group">
        <button class="button-rectangle">
            <IconRelax v-show="iconName=='Расслабленно'"/>
            <IconCalm v-show="iconName=='Спокойно'"/>
            <IconFocus v-show="iconName=='Фокусированно'"/>
        </button>
        <div class="button-title">
            {{ iconName }}
        </div>
    </div>
</template>

<style scoped>
    .button-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px
    }
    .button-rectangle {
        width: 62px;
        height: 65px;
        border-radius: 20px;
        background: #FFFFFFE5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        cursor: pointer;
    }
    .button-rectangle:hover{
        background: #69B09C;
        ;
    }
    .button-title {
        font-weight: 400;
        font-size: 12px;
    }

</style>