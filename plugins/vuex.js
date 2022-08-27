import Vuex from 'vuex'
import { defineNuxtPlugin } from '#app'

const store = new Vuex.createStore({
  state: {
    myVal: 3333
  },
  mutations: {
    UPDATE1(state, val) {
      state.myVal = val
    }
  },

  modules: {
    special: {
      namespaced: true,
      state: () => ({
        myVal2: 4321
      })
    }
  }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
  return {
    provide: {
      store
    }
  }
})