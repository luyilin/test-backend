import Vue from 'vue'
import zerotwo, { createStore } from 'zerotwo'
import { state, mutations } from './mutations'

Vue.use(zerotwo)

export default createStore({
  state,
  mutations
})
