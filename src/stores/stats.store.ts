import { API_ROUTES, client } from '@/api'
import { defineStore } from 'pinia'

export const useStatStore = defineStore('stats', () => {

  async function setFeeling(feeling: string) {
    await client().post(API_ROUTES.stats, {
      type: feeling,
      value: 1,
    });
  };

  return { setFeeling }
})
