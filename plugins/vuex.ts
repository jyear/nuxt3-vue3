import { createStore } from 'vuex';
// eslint-disable-next-line import/no-unresolved
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    const store = createStore({
        state() {
            return {
                name: '23',
            };
        },
    });
    nuxtApp.vueApp.use(store);
});
