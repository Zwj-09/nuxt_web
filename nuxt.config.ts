import Aura from '@primevue/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [/echarts/],
  },

  css: ['normalize.css', 'assets/styles/index.scss', 'assets/iconfont/iconfont.css'],

  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    // '@pinia/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs',
        ],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/icon',
    '@primevue/nuxt-module',
  ],
  primevue: {
    options: {
      ripple: false,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'light',
          cssLayer: false,
        },
      },
    },
  },

  // pinia: {
  //   autoImports: ['defineStore'],
  // },

  piniaPersistedstate: {
    storage: 'localStorage',
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    appKey: 'aa', // 服务端可见

    // 服务端、客户端都可以访问
    public: {
      baseURL: 'http://codercba.com',
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variable.scss";`,
          javascriptEnabled: true,
        },
      },
    },
  },

  compatibilityDate: '2024-07-17',
});
