<template>
  <div class="sidebar" v-if="sidebar">
    <div class="sidebar-close" @click="close">&times;</div>
    <div class="sidebar-content">
      <p>
        как ты!! <br>
        what's up men! <br>
        qwertyuiop asdfghjkl zxcvbnm,,
      </p>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup(){
    const store = useStore()
    const sidebar =  computed(()=>store.state.sidebar)


    return {
      sidebar,
      close: () => store.commit("closeSidebar")
    }
  }
}
</script>

<style scoped>

</style>