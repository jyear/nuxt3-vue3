/* eslint-disable no-shadow */
// const store = {
//     state() {
//         return {
//             id: '',
//             token: '',
//             info: null,
//             referralCode: '',
//         };
//     },
//     mutations: {
//         SET_ID(state: any, payload = '') {
//             state.id = payload;
//         },
//         SET_TOKEN(state: any, payload = '') {
//             state.token = payload;
//         },
//         SET_USER_INFO(state: any, payload: Object | null) {
//             state.info = payload;
//         },

//         SET_REFERRAL_CODE(state: any, payload = '') {
//             state.referralCode = payload;
//         },
//     },
//     actions: {
//         User_setID(context: any, id: string | null | undefined) {
//             context.commit('SET_ID', id);
//         },
//         User_setToken(context: any, token: string | null | undefined) {
//             context.commit('SET_TOKEN', token);
//         },
//         User_setUserInfo(context: any, info: Object | null) {
//             const type = info ? 'setItem' : 'removeItem';
//             localStorage[type]('userInfo', JSON.stringify(info));
//             context.commit('SET_USER_INFO', {
//                 ...info,
//             });
//         },
//         User_setReferralCode(
//             context: any,
//             referralCode: string | null | undefined
//         ) {
//             context.commit('SET_REFERRAL_CODE', referralCode);
//         },
//     },
// };

// export default store;

export const state = () => ({
    counter: 0,
});

export const getters = {
    getCounter(state: any) {
        return state.counter;
    },
};

export const mutations = {
    increment(state: any) {
        state.counter += 1;
    },
};

export const actions = {
    async fetchCounter(state: any) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    },
};
