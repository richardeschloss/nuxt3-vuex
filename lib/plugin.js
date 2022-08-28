import Vuex from 'vuex'
import { defineNuxtPlugin, indexStore } from '#imports'

import VuexStore from '#build/myStore.js'
// import * as I from 'myThing'
// import * as Example from '../store/example.js'
// console.log('name', name)
// console.log('Example', Example)
// const f = 'example'
// import(`../store/${f}.js`).then(console.log)
// 

console.log('VuexStore', VuexStore)
// console.log('indexStore', indexStore)
// console.log('all imports??', I)
const store = Vuex.createStore(VuexStore)


export default  defineNuxtPlugin(async (nuxtApp) => {
  // console.log('do something with config!', nuxtApp) // .$config.store)
  // const vuexCfg = await buildVuexConfig(nuxtApp.$config.store)
  // console.log('cfg', vuexCfg)
  // const store = Vuex.createStore(nuxtApp.$config.store) // Doesn't work :( 
  if (process.server) {
    // const fs = await import('fs')
    // console.log('server', nuxtApp.payload, fs.existsSync)
    nuxtApp.payload.tbd = {
      val: 456,
      // fn: (i) => {
      //   return i + 2
      // }
    }

  } else {
    console.log('client', nuxtApp.payload.tbd)
  }

  return {
    provide: {
      store
    }
  }
})