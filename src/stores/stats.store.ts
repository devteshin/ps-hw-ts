import { API_ROUTES, client } from '@/api'
import type { Stat } from '@/interfaces/stat.interface';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatStore = defineStore('stats', () => {
  const stat = ref<Stat>();

  async function setFeeling(feeling: string) {
    try {
      await client().post(API_ROUTES.stats, {
        type: feeling,
        value: 1,
      })
    } catch {
      alert('Ошибка при обновлении статистики')
    }
  }

  async function setDuration(duration: number) {
    try {
      await client().post(API_ROUTES.stats, {
        type: 'duration_min',
        value: duration,
      })
    } catch {
      alert('Ошибка при обновлении статистики')
    }
  }

  async function fetchStat() {
    try {
      const { data } = await client().get(API_ROUTES.stats);
      stat.value = data.data.summary;
    } catch {
      alert('Ошибка загрузки статистики')
    };
  }

  return { setFeeling, setDuration, fetchStat, stat }
})
