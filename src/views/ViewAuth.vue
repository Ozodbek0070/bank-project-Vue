<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Saytga kirish</h1>
    <div :class="['form-control', {'invalid':eError}]">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" @blur="eBlur">
      <small v-if="eError">{{eError}}</small>
    </div>

    <div :class="['form-control', {'invalid': pError}]">
      <label for="email">Parol</label>
      <input type="password" name="password" id="password" v-model="password"  @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>
    <button class="btn primary" :disabled="isSubmitting || urinishlarSoni">Kirish</button>
    <div v-if="urinishlarSoni" class="text-danger">Tizimga kirishlar soni ko'payib ketdi. Iltimos keyinroq urinib ko'ring!</div>
  </form>
</template>

<script>
import {useLoginForm} from "@/use/LoginFormJS";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {error} from "@/utils/errors";

export default {
  setup(){
    const store = useStore()
    const route = useRoute()
    if (route.query.message=='auth'){
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type:'danger'
      }, {root:true})
    }

    return{
      ...useLoginForm()
    }
  }
}
</script>

<style scoped>

</style>