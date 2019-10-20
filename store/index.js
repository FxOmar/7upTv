export const state = () => ({
    navHeight: 0
})

export const mutations = {
    SET_NAV_HEIGHT(state, val) {
        state.navHeight = val
    }
}

export const actions = {
    async nuxtServerInit ({ commit, dispatch }, { app }) {
        await dispatch('Auth/fetchUser')
    }
}