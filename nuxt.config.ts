import { defineNuxtConfig } from 'nuxt';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'ABC.GAME-MANAGE',
    },
    router: {
        fallback: true,
    },
    css: ['~/assets/less/reset.less', 'element-plus/theme-chalk/index.css'],
    extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
});
