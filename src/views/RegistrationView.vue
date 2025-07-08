<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
import InputString from '@/components/InputString.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const form = ref< {email?: string, userName?: string, password?: string} >({});
const authStore = useAuthStore();
const router = useRouter();

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({name: 'main'});
    }
});

function redirectToLogin() {
  router.push({name: 'login'});
};


function onSubmit(event: Event) {
  event.preventDefault();
  if (!form.value.email || !form.value.userName || !form.value.password ) {
    return
  };

  authStore.create(form.value.email, form.value.userName, form.value.password);
  form.value = {};
};
</script>

<template>
  <div class="auth">
    <IconLogo />
    <form class="auth__form" @submit="onSubmit">
      <InputString v-model="form.email" placeholder="Электронная почта"/>
      <InputString v-model="form.userName" placeholder="Имя пользователя"/>
      <InputString v-model="form.password" placeholder="Пароль" type="password"/>
      <ButtonText type="submit">Создать аккаунт</ButtonText>
    </form>
    <ButtonText @click="redirectToLogin">Войти в приложение</ButtonText>
  </div>
</template>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;
  gap: 91px;
  min-height: 100vh;
  background-image: url("/background-image.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.auth__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 52px;
    }

</style>
