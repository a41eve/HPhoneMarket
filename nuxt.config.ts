// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxt/content',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/_vars.scss" as *;
          @use "~/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
})
