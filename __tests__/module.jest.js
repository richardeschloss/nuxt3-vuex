import assert from 'assert'
import { resolve } from 'path'
import Module from '../lib/module.js'
import { nuxtCtx, useNuxt } from '@nuxt/kit'

global.__dirname = 'lib'

describe('Module', () => {
  it('Shall do stuff.', async () => {
    nuxtCtx.set({
      version: '3.x',
      // @ts-ignore
      options: {
        plugins: [],
        runtimeConfig: {
          public: {}
        },
        srcDir: resolve('.')
      }
    })
    const nuxt = useNuxt()
    await Module({}, nuxt)
    assert(nuxt.options.runtimeConfig.public.store !== undefined)
    assert(nuxt.options.plugins.length === 1)
  })
})