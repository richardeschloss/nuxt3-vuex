import { resolve } from 'path'
import assert from 'assert'
import { initNuxt } from '../__mocks__/module'
import Module from '../lib/module.js'

global.__dirname = 'lib'

describe('Module', () => {
  let nuxt
  // @ts-ignore
  beforeEach(() => {
    nuxt = initNuxt()
  })

  it('Shall do nothing if store folder does not exist', async () => {
    await Module({
      storeDir: '/tmp/notExists'
    }, nuxt)
    assert(nuxt.hooks['imports:extend'] === undefined)
    assert(nuxt.options.build.templates.length === 0)
  })

  it('Shall register vuex stores if store folder exists', async () => {
    await Module({}, nuxt)
    assert(nuxt.hooks['imports:extend'] !== undefined)
    const _imports = []
    nuxt.hooks['imports:extend'](_imports)
    assert(_imports.length > 0)
    assert(nuxt.options.build.templates.length > 0)
    const tmpl = nuxt.options.build.templates[0]
    assert(tmpl.filename === 'vuexStore.js')
    const contents = tmpl.getContents().split('\n')
    assert(contents.at(-1) === 'export default VuexStore')

    assert(nuxt.options.watch[0].includes('store'))
  })

  it('Shall not watch the store folder if watchStore === false', async () => {
    await Module({ watchStore: false}, nuxt)
    assert(nuxt.options.watch.length === 0)
  })

  it('Shall register vuex stores folder, but exclude files specified', async () => {
    await Module({ exclude: [resolve('store/example.js')]}, nuxt)
    const contents = nuxt.options.build.templates[0].getContents()
    assert(!contents.includes('store/example.js'))
  })
})