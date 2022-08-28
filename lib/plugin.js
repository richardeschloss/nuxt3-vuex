import Vuex from 'vuex'
import { defineNuxtPlugin } from '#imports'
import VuexStore from '#build/vuexStore.js'

const store = Vuex.createStore(VuexStore)

export default  defineNuxtPlugin(() => {
  return {
    provide: {
      store
    }
  }
})