[![npm](https://img.shields.io/npm/v/nuxt3-vuex)](https://www.npmjs.com/package/nuxt3-vuex)
[![npm](https://img.shields.io/npm/dt/nuxt3-vuex)](https://www.npmjs.com/package/nuxt3-vuex)
[![Node.js CI](https://github.com/richardeschloss/nuxt3-vuex/actions/workflows/node.js.yml/badge.svg)](https://github.com/richardeschloss/nuxt3-vuex/actions/workflows/node.js.yml)
[![NPM](https://img.shields.io/npm/l/nuxt3-vuex)](https://github.com/richardeschloss/nuxt3-vuex/blob/development/LICENSE)

[📖 **Release Notes**](https://github.com/richardeschloss/nuxt3-vuex/blob/master/CHANGELOG.md)

# nuxt3-vuex

> Vuex stores feature for Nuxt3 

This module allows your existing Nuxt2 "store" folder to be used in Nuxt3 as a Vuex store.

## Features
* ✅ Customizable "store" folder 
* ✅ Support for nested subdirectories in store folder (with support for ".js", ".mjs", ".ts" extensions)
* ✅ Fast HMR support for when store changes.

## Setup

1. Add `nuxt3-vuex` dependency to your project

```bash
npm i -D nuxt3-vuex
```

2. Add `nuxt3-vuex` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt3-vuex', { /* Module options */ }
  ]
}
```

## Module Options

| Option | Description | Default |
| --- | --- | --- |
| `storeDir` | directory where Vuex stores are located | `<srcDir>/store` |
| `watchStore` | enable the file watching for store directory | `true` |