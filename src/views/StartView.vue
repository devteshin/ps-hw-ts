<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function onSubmit(event: Event) {
  event.preventDefault();
  router.push({name: 'login'})
};

</script>

<template>
  <div class="auth">
    <IconLogo />
    <form class="auth__form" @submit="onSubmit">
      <div>
        <h1>Добро пожаловать!</h1>
        <p>Медитируй и оставайся в фокусе,</p>
        <p>чтобы быть счастливым.</p>
        <ButtonText class="button" type="submit">Войти в приложение</ButtonText>
      </div>
    </form>
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

h1 {
  font-weight: 700;
  font-size: 34px;
  color: white;
  text-align: center;
}

p {
  font-weight: 500;
  font-size: 20px;
  color: white;
  font-family: Alegreya Sans;
  text-align: center;
}

.button {
  margin-top: 30px;
}
</style>
