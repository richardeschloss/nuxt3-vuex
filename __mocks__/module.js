import { resolve } from 'path'
import { nuxtCtx, useNuxt } from '@nuxt/kit'

export function initNuxt() {
  nuxtCtx.unset()
  nuxtCtx.set({
    callHook(){},
    hooks: {},
    hook (evt, cb) {
      useNuxt().hooks[evt] = cb
    },
    version: '3.x',
    // @ts-ignore
    options: {
      watch: [],
      // @ts-ignore
      build: {
        templates: [],
      },
      plugins: [],
      runtimeConfig: {
        public: {}
      },
      srcDir: resolve('.')
    }
  })
  return useNuxt()
}

export { useNuxt }