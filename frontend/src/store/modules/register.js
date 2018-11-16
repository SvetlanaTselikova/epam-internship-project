import axios from 'axios'

const state = {
}

const mutations = {
}

const actions = {
    register ({commit},user) {
        return new Promise((resolve, reject) => {
        var data=JSON.stringify (user
        )
        axios.post('http://localhost:3000/api/users/register', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() =>{
            resolve()
            }).catch(() => {
                reject()
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