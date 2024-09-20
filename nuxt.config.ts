// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [{ name: 'description', content: 'Everything about Nuxt 3' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },
  eslint: {
    fix: true, // Option to automatically fix lint issues
    cache: false // Optionally disable cache if needed
  },
  build: {
    transpile: ['@tailwindcss/forms'] // Exemplo, ajuste conforme necessário
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
