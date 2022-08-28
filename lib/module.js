import { existsSync } from 'fs'
import { resolve } from 'path'
import { defineNuxtModule, addPlugin, addAutoImport, addAutoImportDir, addTemplate } from '@nuxt/kit'
import glob from 'glob'

async function buildVuexConfig(storeDefinitionFiles, fullStoreDir, storeRoot) {
  const rootStore = {}, modules = {}
  const imports = await Promise.all(storeDefinitionFiles.map(async file => ({
    file,
    mod: await import(file)
  })))
  imports.forEach(imported => {
    if (!imported.mod.state) { return }
    imported.mod.state = imported.mod.state() // Hmm...how to pass up functions? I think we need to import...or create an imports map ... how does pinia/nuxt do it?
    const relPath = imported.file.replace(fullStoreDir + '/', '')  
    if (storeRoot.test(relPath)) {
      Object.assign(rootStore, imported.mod)
    } else {
      const namespace = relPath.replace(/(\/|\.js|\.mjs|\.ts)/g, '')
      modules[namespace] = {
        ...imported.mod,
        namespaced: true
      }
    }
  })
  return {
    ...rootStore,
    modules
  }
}

export default defineNuxtModule({
  async setup(moduleOptions = {}, nuxt) {
    const { 
      storeDir = 'store',
      storeRoot = /^index(.js|.ts|.mjs)$/,
      isPublic = true
    } = moduleOptions
    const { srcDir } = nuxt.options
    const fullStoreDir = resolve(nuxt.options.srcDir, storeDir)
    if (existsSync(fullStoreDir)) {
      const pattern = `${fullStoreDir}/**/*+(.mjs|.ts|.js)`
      const storeDefinitionFiles = glob.sync(pattern)
      const vuexCfg = await buildVuexConfig(storeDefinitionFiles, fullStoreDir, storeRoot)
      if (isPublic) {
        nuxt.options.runtimeConfig.public.store = { srcDir, storeDefinitionFiles, fullStoreDir, storeRoot } // vuexCfg
      } else {
        nuxt.options.runtimeConfig.store = vuexCfg
      }
    }
    
    addPlugin({
      src: resolve(__dirname, 'plugin.js')
    })

    // addAutoImportDir(fullStoreDir) // not a good option for vuex which will have same aliases being exported (state/mutations/actions)

    // SEEMS TO BE THE WAY TO GO!!
    // Add the imports...
    // Then build contents...
    addAutoImport([{
      from: resolve(fullStoreDir, 'index.js') , name: '*', as: 'indexStore',
    // ....
    }, {
      from: resolve(fullStoreDir, 'example.js') , name: '*', as: 'exampleStore'
    }])

    addTemplate({ 
      filename: 'myStore.js', 
      getContents: () => {
        return [
          'import { indexStore, exampleStore } from "#imports"',
          'const store = { ...indexStore, modules: { example:  { ...exampleStore, namespaced: true } } }',
          'export default store'
        ].join('\n')
      }
    })
  }
})