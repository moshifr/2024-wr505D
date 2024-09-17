import { defineStore } from "pinia";

export const useSession = defineStore('session', {
  persist: true,
  state: () => {
    return {
      user: null,
      loggedIn: false,
      token: ''
    }
  },
  actions: {
    login({ user, token }) {
      this.loggedIn = true
      this.user = user
      this.token = token
    }
  }
})