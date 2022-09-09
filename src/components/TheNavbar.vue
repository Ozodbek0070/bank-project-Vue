<template>
  <nav class="navbar">
    <h3>Amaliyot Online Bank</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Arizalar</router-link>
      </li>
      <li>
        <router-link to="/help">Yordam</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="open">Xat</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Chiqish</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name:"TheNavbar",
  setup(){
    const store = useStore()
    const router = useRouter()

    // const logoutFunc = ()=>{
    //   store.commit('auth/logout')
    //   router.push('/auth')
    // }
    // return{
    //   logoutFunc,
    //   open:()=>{store.commit('openSidebar')}
    // }

    function open(){
      store.commit('openSidebar')
    }

    return{
      store,
      open,
      logout:()=>{
        store.commit('auth/logout')
        router.push('/auth')
      }
    }
  }
}
</script>

<style scoped>

</style>

<!--https://hisgames.org/cossacks-2-napoleonic-wars-->