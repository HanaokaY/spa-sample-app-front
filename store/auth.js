export const state = () => ({
    currentUser: null
});

export const mutations = {
    setUser(state, payload) {
        state.currentUser = payload
    },
};

export const actions = {
    // コンテキストオブジェクトというStoreインスタンスを受け取って、setUserという名前でmutationsを呼び出している
    setUser (context, data) {
        context.commit('setUser', data)
    }
};
