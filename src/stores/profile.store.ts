import { API_ROUTES, client } from '@/api'
import type { Profile } from '@/interfaces/profile.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>()

  async function fetchProfile() {
    try {
      const { data } = await client().get(API_ROUTES.profile);
      profile.value = data.data.user;
    }
    catch {
      alert("Ошибка загрузки профиля пользователя");
    }
  }

  return { profile, fetchProfile }
})
