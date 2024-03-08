// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ["@vuepic/vue-datepicker",'jsonwebtoken'],
  },

  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-lodash",'@sidebase/nuxt-auth'],

  routeRules: {
    "/admin": { redirect: "/admin/dashboard" },
    "/leaves": { ssr: false },
    "/announcements": { prerender: true },
    '/articles':{ swr: 15 },
  },
  nitro:{
    prerender:{
      routes: ['/announcements/succurro-sopor-celer-vulgaris'],
    }
  },

  ui:{
    icons:['heroicons','el']
  },
  image:{
    domains:['localhost'],
  },
  auth:{
    provider:{
      type:'local',
      pages:{
        login:'/auth/login',
      },
      endpoints: {
        getSession: { path: '/profile'},
        signOut: { method: 'delete'}
      },
    }
  }
});
