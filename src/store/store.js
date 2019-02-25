import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  list: [],
  bdId: '',
  add_list: [],
  st: 0,
  dt_id: ''
}
const mutations = {
  add_dtId (state, id) {
    state.dt_id = id
  },
  first (state) {
    state.st = 1
  },
  changeId (state, id) {
    state.bdId = id
  },
  addSong (state, date) {
    // 判断是否有重复添加的行为，如果有责删除旧的添加新的
    for (let i = 0, n = state.add_list.length; i < n; i++) {
      if (state.add_list[i].id == date.id) {
        state.add_list.splice(i, 1)
      }
    }
    state.add_list.push(date);
   // console.log(date)
  },
  rem (state, key) {
    if (key == -1) {
      state.add_list.splice(0)
      return false
    }
    state.add_list.splice(key, 1)
  }
}
export default new Vuex.Store({
  state, mutations
})
