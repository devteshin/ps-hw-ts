import { API_ROUTES, http } from "@/api";
import type { Meditation } from "@/interfaces/meditation.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMeditationStore = defineStore('meditations', () => {
    const meditations = ref<Meditation[]>([]);

    async function fetchMeditations() {
      const { data } = await http.get(API_ROUTES.meditations)
      meditations.value = data.data.meditations;
    }

    return { meditations,  fetchMeditations };
});