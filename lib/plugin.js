import Vuex from 'vuex'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('do something with config!', nuxtApp.$config.store)
  
  const store = Vuex.createStore(nuxtApp.$config.store) // Doesn't work :( 
  
  return {
    provide: {
      store
    }
  }
})