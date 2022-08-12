import { defineNuxtConfig } from 'nuxt';
const path = require('path');
console.log(defineNuxtConfig);
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false,
        tsConfig: {
            compilerOptions: {
                types: ['vite/client'],
                typeRoots: ['global/'],
            },
            include: ['global/*.d.ts'],
            exclude: ['node_modules'],
        },
    },
    meta: {
        title: 'ABC.GAME-MANAGE',
    },
    router: {
        fallback: true,
    },
    alias: {
        '@/': path.resolve(__dirname, './'),
    },
    css: ['@/assets/less/reset.less', 'element-plus/theme-chalk/index.css'],
    extensions: ['.ts', '.tsx', '.vue', '.js', '.jsx', '.mjs'],
});
