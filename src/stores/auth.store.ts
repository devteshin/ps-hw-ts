import { client, API_ROUTES, http } from '@/api'
import type { CreateResponse, LoginResponse } from '@/interfaces/auth.interface'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const TOKEN_STORE_KEY = 'token-store'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>()

  const initialValue = localStorage.getItem(TOKEN_STORE_KEY)

  if (initialValue) {
    token.value = initialValue
  }

  function setToken(newToken: string) {
    token.value = newToken
    localStorage.setItem(TOKEN_STORE_KEY, newToken)
  }

  function clearToken() {
    token.value = undefined
    localStorage.removeItem(TOKEN_STORE_KEY)
  }

  const getToken = computed(() => token.value)

  async function login(userName: string, password: string) {
    try {
      const { data } = await http.post<LoginResponse>(API_ROUTES.auth.login, {
        userName,
        password,
      })
      if (data.message == 'success') {
        setToken(data.data.token)
      } else {
        alert(data.message)
      }
    }
    catch {
      alert("Ошибка при авторизации");
    }
  }

  async function create(email:string, userName: string, password: string) {
    try {
      const { data } = await http.post<CreateResponse>(API_ROUTES.auth.register, {
        userName,
        email,
        password,
      });
      console.log(data);
      if (data.status == 'success') {
        login(userName, password)
      }
      else {
        alert(data.message)
      }
    }
    catch {
      alert('Ошибка при создании аккаунта');
    }
  }


  return { getToken, login, create, setToken, clearToken }
})
