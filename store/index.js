export const state = () => {
  return {
    user: null,
    loading: true
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
    state.loading = false
  }
}

export const actions = {
  setUser({ commit }, payload) {
    const user = {
      uid: payload.uid,
      email: payload.email
    }
    commit('setUser', user)
  },
  unsetUser({ commit }) {
    commit('setUser', null)
  }
}

export const getters = {
  user(state) {
    return state.user
  },
  loading(state) {
    return state.loading
  }
}
