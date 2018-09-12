import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Vue.axios.defaults.headers.common['Authorization'] = 

const store = new Vuex.Store({
  state: {
    isDebug: false,
  },
  getters: {
    isDebug: (state) => {
      return state.isDebug
    }
  },
  mutations: {
    isDebug(state, value) {
      state.isDebug = value;
    }
  },
  actions: {
    createRemix({ commit, state }, payload) {
      
    }
  }
})

export default store;
