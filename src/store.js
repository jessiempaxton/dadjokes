import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
// import router from './router'

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: 'https://icanhazdadjoke.com',
  timeout: 3000,
  headers: {
    'Accept': 'application/json'
  }
})


export default new Vuex.Store({
  state: {
    joke: {
      dad: "",
      id: "",
      status: Number
    }
  },
  mutations: {
    setJoke(state, joke) {
      state.joke = joke
    },
  },
  actions: {
    async getJoke({ commit, dispatch }, payload) {
      try {
        let res = await api.get(payload)
        console.log('got joke!', res.data)
      } catch (error) { console.error(error) }
    },
  }
})
