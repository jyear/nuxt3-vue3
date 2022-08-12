import { createStore, Store, StoreOptions } from 'vuex';

const storeFiles: any = import.meta.globEager('./*.ts');
const modules = {
    user: null,
};

Object.keys(storeFiles).forEach((key: string) => {
    if (key !== './index.ts') {
        const name = key.replace(/.\//, '').replace(/.ts/, '');
        modules[name] = storeFiles[key].default;
    }
});

const store = createStore({
    modules: { ...modules },
});

export function useStore() {
    return store;
}

// export default store;
