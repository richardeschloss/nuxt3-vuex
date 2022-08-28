import assert from 'assert'
import Plugin from '../lib/plugin'

describe('Plugin', () => {
  it('Shall provide the Vuex store to Nuxt3', () => {
    assert(Plugin.provide.store !== undefined)
  })
})