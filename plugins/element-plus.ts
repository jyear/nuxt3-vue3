import ElementPlus from 'element-plus';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Icons from '@element-plus/icons-vue';
// eslint-disable-next-line import/no-unresolved
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus);

    Object.keys(Icons).forEach((key) => {
        // nuxtApp.vueApp.component(key, Icons[key]); // JS中用这行
        nuxtApp.vueApp.component(key, Icons[key as keyof typeof Icons]); // TS中用这行
    });
});
