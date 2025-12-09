import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { id: number; name: string; email: string }
  }),

  actions: {
    login(email: string, password: string) {
      // TODO: 後でAPIと接続。今はダミーデータを使用
      this.user = {
        id: 1,
        name: 'デモユーザー',
        email
      }
    },

    logout() {
      this.user = null
    }
  }
})
