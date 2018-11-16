import axios from 'axios'
import { getRecords } from '../actions/user'

const state = {
    records:[]
}

const mutations = {
    [getRecords] (state,records) {
        state.records=records
    },
    addRecord (state,record) {
        state.records.push(record)
    }
}

const actions = {
    record ({commit},record) {
        let data=JSON.stringify (record
        )
        axios.post('http://localhost:3000/api/users/record', data, {
            headers: {
                'Content-Type': 'application/json'
            }
            }).then(() =>{
                commit('addRecord',record)
        })
    },

    getRecords ({commit}) {
        return new Promise((resolve, reject) => {axios.get('http://localhost:3000/api/users/myRecords',{
            headers: {
                'Content-Type': 'application/json'
            }
            }).then((resp) =>{
                commit(getRecords,resp.data)
                resolve()
        })        
    })
  }
}

const getters = {
    
}

export default {
    state,
    mutations,
    actions,
    getters
}
