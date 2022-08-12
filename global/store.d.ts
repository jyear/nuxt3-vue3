import { Store } from 'vuex';
interface User {
    id: string;
}
interface State {
    user: User;
}
declare module '@/store' {
    export function useStore(key?: string): Store<State>;
}
