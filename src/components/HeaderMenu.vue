<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';
import IconLogo from './icons/IconLogo.vue';
import IconMenuChart from './icons/IconMenuChart.vue';
import IconMenuExit from './icons/IconMenuExit.vue';
import IconMenuStart from './icons/IconMenuStart.vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

function logout() {
  authStore.clearToken();
  router.push({name: '/login'});
};


</script>

<template>
    <div class="menu">
        <div class="logo">
            <IconLogo />
        </div>
        <div class="menu-items">
            <div class="menu-item">
                <IconMenuStart />
                <div class="menu-item-title">
                  <RouterLink :to="`/main`" active-class="router-link-active">Медитация</RouterLink>
                </div>
            </div>
            <div class="menu-item-border">
                <IconMenuChart />
                <div class="menu-item-title">
                    <RouterLink :to="`/stat`" active-class="router-link-active">Статистика</RouterLink>
                </div>
            </div>
            <div class="menu-item">
                <IconMenuExit />
                <div class="menu-item-title">
                  <a href="#" @click="logout">Выход</a>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .logo {
        width: 76px;
        height: 86px;
    }
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 40px;
        padding-right: 80px;
        height: 170px;
    }
    .menu-items {
        width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .menu-item {
        width: 167px;
        height: 92px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFFFFF80;
    }
    .menu-item-border {
        width: 167px;
        height: 92px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-left: 3px solid #3A5051;
        border-right: 3px solid #3A5051;
        color: #FFFFFF80;
    }
    .menu-item-border:hover, .menu-item:hover, .router-link-active {
        color: white;
    }
    .menu-item-title a {
        font-family: Alegreya Sans;
        font-weight: 400;
        font-size: 22px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
</style>
