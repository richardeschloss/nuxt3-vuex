import assert from 'assert'
import { resolve } from 'path'
import Module from '../lib/module.js'
import { nuxtCtx, useNuxt } from '@nuxt/kit'

describe('Module', () => {
  it('Shall do stuff.', async () => {
    nuxtCtx.set({
      version: '3.x',
      // @ts-ignore
      options: {
        runtimeConfig: {
          public: {}
        },
        srcDir: resolve('.')
      }
    })
    const nuxt = useNuxt()
    await Module({}, nuxt)    
    assert(useNuxt().options.runtimeConfig.store !== undefined)
  })
})