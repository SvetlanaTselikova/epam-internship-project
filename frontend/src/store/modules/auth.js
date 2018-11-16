import axios from 'axios'
import { auth, authLogout } from '../actions/auth'
import { userRequest } from '../actions/user'
import { getRecords } from '../actions/user'

const state = {
    token: localStorage.getItem('user-token') || '',
}

const mutations = {
    [auth]: (state, token) => {
        state.token = token
    },
    [authLogout]: (state) => {
        state.token = ''
      }
}

const actions = {
    [auth]: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => { 
          let data=JSON.stringify(user)
          axios.post('http://localhost:3000/api/users/auth', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
              const token = resp.data.token
              localStorage.setItem('user-token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit(auth, token)
              dispatch(userRequest)
              dispatch(getRecords)
              resolve(resp)
            })
          .catch(err => {
            localStorage.removeItem('user-token') 
            reject(err.response.data)
          })
        })
      },

    [authLogout]: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            commit(authLogout)
            localStorage.removeItem('user-token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
            })
        }
    }

const getters = {
    isAuthenticated: state => !!state.token
}

export default {
    state,
    mutations,
    actions,
    getters
}