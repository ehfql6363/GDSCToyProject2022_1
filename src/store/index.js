import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
  },
  getters: {
    isLogin(state){
      return state.id !== '';
    }
  },
  mutations: {
    setId(state, id){
      state.id = id;
    },
    clearId(state){
      state.id = '';
    }
  },
  actions: {
  },
  modules: {
  },
})