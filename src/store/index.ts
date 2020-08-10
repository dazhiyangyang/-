import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navIndex: 0,
    clickIndex: 0
  },
  mutations: {
    SET_NAV_INDEX: (state: StoreType.State, payload: number) => {
      state.navIndex = payload
    },
    SET_CLICK_INDEX: (state: StoreType.State, payload: number) => {
      state.clickIndex = payload
    }
  },
  actions: {
    setNavIndex: ({ commit }, payload: number) => {
      commit('SET_NAV_INDEX', payload)
    },
    setClickIndex: ({ commit }, payload: number) => {
      commit('SET_CLICK_INDEX', payload)
    }
  },
  modules: {}
})
