import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: 'icanhazdadjoke.com',
  timeout: 3000,
  // withCredentials: true
})


export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
