import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: ''
  },
  getters: {
    getCountry: (state) => {
      return state.country
    }
  },
  mutations: {
    updateCountry: (state, payload) => {
      state.country = payload.country
    }
  },
  actions: {
    stats: (context, payload) => {
      context.commit('updatedStat', payload)
    }
  },
  modules: {
  }
})
