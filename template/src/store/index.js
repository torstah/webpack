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
      return Vue.axios.post(baseUrl + '/create', payload
      )
        .then((response) => {
          // let result = response.data.result;
          // //console.log(response.data.result)

          // let current = state.currentRemix;
          // let remixId = response.data.id;
          // current['id'] = result.id;
          // commit('currentRemix', current)
          return response;
        })
    }
  }
})

export default store;
