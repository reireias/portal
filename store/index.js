import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()

export const state = () => {
  return {
    loading: true,
    user: null,
    messages: [],
  }
}

export const mutations = {
  ...vuexfireMutations,
  setUser(state, user) {
    state.user = user
    state.loading = false
  },
}

export const actions = {
  bindMessages: firestoreAction(({ bindFirestoreRef }, _) => {
    return bindFirestoreRef(
      'messages',
      db.collection('messages').orderBy('createdAt', 'desc')
    )
  }),
  setUser({ commit }, payload) {
    const user = {
      uid: payload.uid,
      email: payload.email,
    }
    commit('setUser', user)
  },
  unsetUser({ commit }) {
    commit('setUser', null)
  },
}

export const getters = {
  loading(state) {
    return state.loading
  },
  user(state) {
    return state.user
  },
  messages(state) {
    return state.messages
  },
}
