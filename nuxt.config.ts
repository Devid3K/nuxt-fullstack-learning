// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["@vuepic/vue-datepicker",'jsonwebtoken'],
  },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-lodash",'@sidebase/nuxt-auth', '@pinia/nuxt', '@nuxt/content', 'nuxt-content-assets'],
  routeRules: {
    "/": { redirect: "/leaves" },
    "/admin": { redirect: "/admin/dashboard" },
    "/leaves": { ssr: false },
    "/announcements": { prerender: true },
    '/articles':{ swr: 60 * 60 },
    '/articles/**' :{ swr: 7 * 24 * 60 * 60 },
  },
  nitro:{
    prerender:{
      routes: [],
    }
  },
  runtimeConfig:{
    accessToken: {
      expiresIn: '30m',
      secretKey: ''
    },
    public:{
      baseUrl:''
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
      token:{
        signInResponseTokenPointer:'/token/accessToken',
        maxAgeInSeconds: 7 * 24 * 60 * 60,
      },
      sessionDataType:{
        id: 'string',
        email: 'string',
        name: 'string',
        role: 'ADMIN | MANAGER | MEMBER',
        image: 'string',
      }
    }
  },
  hooks: {
    close: (nuxt) => {
      if (!nuxt.options._prepare)
        process.exit()
    },
  },  
});
