
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify/lib'],
  },

  vite: {
    define: {
      'process.env.DEBUG': true,
    },
  },

  runtimeConfig: {
    public: {
      filePrefix: process.env.NUXT_APP_BASE_URL || '/'
    }
  },

  dir: { pages: 'pages' },
	ssr: false,
})
