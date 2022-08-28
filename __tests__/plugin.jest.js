// @ts-nocheck
import assert from 'assert'
import { useNuxt } from '@nuxt/kit'
import Plugin from '../lib/plugin'


describe('Plugin', () => {
  it('Shall provide the Vuex store to Nuxt3', () => {
    const nuxt = useNuxt()
    assert(nuxt.store !== undefined) // From vue.use
    assert(Plugin.provide.store !== undefined)
  })
})