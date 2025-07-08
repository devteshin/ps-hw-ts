import { API_ROUTES, client } from "@/api";
import type { Meditation } from "@/interfaces/meditation.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMeditationStore = defineStore('meditations', () => {
    const meditations = ref<Meditation[]>([]);

    async function fetchMeditations() {
      try {
        const { data } = await client().get(API_ROUTES.meditations)
        meditations.value = data.data.meditations;
      }
      catch {
        alert("Ошибка загрузки списка медитаций");
      }
    }

    return { meditations,  fetchMeditations };
});
