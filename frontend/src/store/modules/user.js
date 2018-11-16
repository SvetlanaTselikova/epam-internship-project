import { userRequest } from '../actions/user'
import axios from 'axios'
import Vue from 'vue'
import { authLogout } from '../actions/auth'

const state = {
   profile: {} }

const getters = {
}

const mutations = {
  [userRequest]: (state, resp) => {
    Vue.set(state, 'profile', resp)
  },
  [authLogout]: (state) => {
    state.profile = {}
  }
}

const actions = {
  [userRequest]: ({commit, dispatch}) => {
    axios.get('http://localhost:3000/api/users/me',  {
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(resp => {
        commit(userRequest, resp.data)
      })
      .catch(resp => {
        dispatch(authLogout)
      })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}