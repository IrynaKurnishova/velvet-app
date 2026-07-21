export default defineNuxtConfig({
  compatibilityDate: '2026-07-19',
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    groqApiKey: '',
  },
  supabase: {
    redirect: false,
  },
  pwa: {
    manifest: {
      name: 'Velvet',
      short_name: 'Velvet',
      theme_color: '#0D0D0D',
      background_color: '#0D0D0D',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
})
