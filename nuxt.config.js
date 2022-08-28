import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  telemetry: false,
  modules: ['./lib/module.js'],
})