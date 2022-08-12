import { Store, mapState } from 'vuex';
interface User {
    id: string;
}
interface State {
    user: User;
}
declare module '@/store' {
    export function useStore(key?: string): Store<State>;
    export function useMapState(): mapState;
}
