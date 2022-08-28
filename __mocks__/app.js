// @ts-nocheck
import { nuxtCtx, useNuxt } from '@nuxt/kit'

export const defineNuxtPlugin = function(cb) {
  nuxtCtx.set({
    store: null,
    vueApp: {
      use(store) {
        useNuxt().store = store
      }
    }
  })
  const nuxt = useNuxt()
  return cb(nuxt)
}