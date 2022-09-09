<template>
  <component :is="layout+'-layout'"></component>
<!--  <main-layout></main-layout>-->

</template>
<script>
import MainLayout from "@/Layouts/MainLayout";
import AuthLayout from "@/Layouts/AuthLayout";
import {computed} from "vue";
import {useRoute} from "vue-router"
export default {
  components:{
    MainLayout,
    AuthLayout,
  },
  setup(){
    const route = useRoute()
    return{
      layout: computed(()=> route.meta.layout)
    }
  }
}
</script>

<style>

</style>
