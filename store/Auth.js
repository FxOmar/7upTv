export const state = () => ({
    user: null
})

export const mutations = {
    SET_USER(state, data) {
        state.user = data
    }
}

export const actions = {
    async fetchUser ({ commit, state }) {
        if (this.$cookies.get('access_token')) {
            let { user } = await this.$axios.$get('/me')
            this.$cookies.set('user', user)
            if (user) {
                commit('SET_USER', user)
            }
        }
    }
}