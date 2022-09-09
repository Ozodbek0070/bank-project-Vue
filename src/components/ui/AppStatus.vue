<template>
  <span :class="['badge',className]">{{text}}</span>
</template>

<script>
import {ref, watch} from "vue";

export default {
  props:{
    'type':{
      type: String,
      required: true,
      validator(value){
        return ['done', 'cancelled', 'active', 'sending'].includes(value)
      }
    }
  },
  name: "AppStatus",
  setup(props){
    const classesMap = {
      done:'primary',
      cancelled:'danger',
      active:'primary',
      sending:'warning',
    }
    const textMap = {
      done:'Bajarildi',
      cancelled:'Qaytarildi',
      active:'Tasdiqlanmoqda',
      sending:'Yuborilmoqda',
    }

    watch(props, (val)=> {
      className.value = classesMap[val.type]
      text.value = textMap[val.type]
    })

    const className = ref(classesMap[props.type])
    const text =  ref(textMap[props.type])

    return {
      className,
      text
    }
  }
}
</script>

<style scoped>

</style>