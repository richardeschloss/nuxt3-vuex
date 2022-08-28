import assert from 'assert'
import { resolve } from 'path'
import Module from '../lib/module.js'
import { nuxtCtx, useNuxt } from '@nuxt/kit'

global.__dirname = 'lib'

describe('Module', () => {
  it('Shall do stuff.', async () => {
    nuxtCtx.set({
      callHook(){},
      hooks: {},
      hook (evt, cb) {
        useNuxt().hooks[evt] = cb
      },
      version: '3.x',
      // @ts-ignore
      options: {
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
    const nuxt = useNuxt()
    await Module({}, nuxt)
    assert(nuxt.hooks['imports:extend'] !== undefined)
    const _imports = []
    nuxt.hooks['imports:extend'](_imports)
    assert(_imports.length > 0)
    // console.log(_imports)

    assert(nuxt.options.build.templates.length > 0)
    // console.log(nuxt.options.build.templates[0].getContents())
  })
})