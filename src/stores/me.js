import axios from "axios";
import { defineStore } from "pinia";

export const useMeStore = defineStore('me', {
  state: () => ({
    user: null,
  }),
  actions: {
    getMe() {
      return axios.get('api/me')
      .then((response) => {
        this.user = response.data.data
      })
    }
  },
  getters: {
    isLoggedIn: (state) => !!state?.user?.id
  }
})
