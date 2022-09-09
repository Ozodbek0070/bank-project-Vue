import axios from "axios";
import {error} from "@/utils/errors";

export default {
    namespaced:true,
    state(){
        return{
            token:localStorage.getItem("jwt-token")
        }
    },
    actions:{
        async login({commit, dispatch}, payload){
        //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_API_KEY}`
                const {data} = await axios.post(url,{...payload, returnSecureToken:true})
                commit('setToken', data.idToken)
                commit('clearMessage',null, {root:true})
            }
            catch (e) {
                dispatch('setMessage', {
                    value: error(e.response.data.error.message),
                    type:'danger'
                }, {root:true})
            }
        }
    },
    mutations:{
        setToken(state,token){
            state.token = token
            localStorage.setItem("jwt-token",token)
        },
        logout(state){
            state.token = null
            localStorage.removeItem("jwt-token")
        }
    },
    getters:{
        token(state){
            return state.token
        },
        isAuthenticated(_,getters){
            return !!getters.token
        }
    }
}