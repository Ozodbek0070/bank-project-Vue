import store from "@/store";
import axios from "../../axios/request";
// import {error} from "@/utils/errors";
export default {
    namespaced:true,
    state(){
        return{
            requests: []
        }
    },
    actions:{
        async create({commit,dispatch}, payload){
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.post(`/requests.json?auth=${token}`,payload)
                console.log(data)

                commit("addRequests", {...payload, id:data.name})

                dispatch('setMessage', {
                    value: "Muvaffaqiyatli qo'shildi",
                    type:'primary'
                }, {root:true})
            }
            catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type:'warning'
                }, {root:true})
            }
        },
        async load({commit, dispatch}){
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.get(`/requests.json?auth=${token}`)
                const requests = Object.keys(data).map(id =>({...data[id], id}))
                commit('setRequests', requests)
            }
            catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type:'warning'
                }, {root:true})
            }
        },
        async loadById({dispatch}, id){
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.get(`/requests/${id}.json?auth=${token}`)
                return data
            }
            catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type:'warning'
                }, {root:true})
            }
        },
        async remove({dispatch}, id){
            try {
                const token = store.getters['auth/token']
                await axios.delete(`/requests/${id}.json?auth=${token}`)
                dispatch('setMessage', {
                    value: "Ariza muvaffaqiyatli o'chirildi",
                    type:'primary'
                }, {root:true})
            }
            catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type:'warning'
                }, {root:true})
            }
        },
        async update({dispatch}, request){
            try {
                const token = store.getters['auth/token']
                await axios.put(`/requests/${request.id}.json?auth=${token}`, request)
                dispatch('setMessage', {
                    value: "Ariza muvaffaqiyatli o'zgartirildi",
                    type:'primary'
                }, {root:true})
            }
            catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type:'warning'
                }, {root:true})
            }
        }
    },
    mutations:{
        setRequests(state, requests) {
            state.requests = requests
        },
        addRequests(state, request){
            state.requests.push(request)
        }
    },
    getters:{
        requests(state){
            return state.requests
        }
    }
}