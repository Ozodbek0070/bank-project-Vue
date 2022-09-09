<template>
  <div v-if="message" :class="['alert',message.type]">
    <p class="alert-title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup(){
    const store = useStore()
    const message = computed(()=>{
      return store.state.message
    })

    const title_Map = {
      primary: 'Muvaffaqiyatli bajarildi!',
      warning: 'Ogohlantirish!',
      danger: 'Xatolik bor!'
    }

    const title = computed(()=>{
      return message.value ? title_Map[message.value.type] : null
    })

    return{
      message,
      title,
      close:()=>store.commit('clearMessage')
    }
  }
}
</script>

<style scoped>

</style>