// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-lodash"],

  routeRules: {
    "/admin": { redirect: "/admin/dashboard" },
    "/leaves": { ssr: false },
    "/announcements": { prerender: true },
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  ui:{
    icons:['heroicons','el']
  },
  image:{
    domains:['localhost'],
  },
});
