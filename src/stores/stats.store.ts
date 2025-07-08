import { API_ROUTES, client } from '@/api'
import { defineStore } from 'pinia'

export const useStatStore = defineStore('stats', () => {

  async function setFeeling(feeling: string) {
    try {
      await client().post(API_ROUTES.stats, {
        type: feeling,
        value: 1,
      });
    }
    catch {
      alert("Ошибка при обновлении статистики");
    }
  };

  return { setFeeling }
})
