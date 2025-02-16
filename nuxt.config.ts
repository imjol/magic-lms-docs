import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  components: true,
  // css: ['~/assets/css/main.css'],
  // vite: {
  //   plugins: [
  //     tailwindcss(),
  //   ],
  // },
  content: {
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  },
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible'
  ],
  compatibilityDate: '2024-10-24'
})
