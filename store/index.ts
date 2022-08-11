import { createStore } from 'vuex';

const storeFiles: any = import.meta.glob('./*.ts', { eager: true });
const modules: any = {};

Object.keys(storeFiles).forEach((key: string) => {
    if (key !== './index.ts') {
        const name = key.replace(/.\//, '').replace(/.ts/, '');
        modules[name] = storeFiles[key].default;
    }
});

export const store = createStore({
    modules: { ...modules },
});

export function useStore() {
    return store;
}

export interface State {
    framework: any;
    common: any;
    user: any;
}

// export default store;
