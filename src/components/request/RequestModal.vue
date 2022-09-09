<template>
  <form @submit.prevent="onSubmit">
    <div :class="['form-control', {'invalid':fError}]">
      <label for="fish">FISH</label>
      <input type="text" id="fish" v-model="fish" @blur="fBlur">
      <small v-if="fError">{{fError}}</small>
    </div>

    <div :class="['form-control', {'invalid':pError}]">
      <label for="phone">Telefon</label>
      <input type="number" id="phone" v-model="phone" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>

    <div :class="['form-control', {'invalid':sError}]">
      <label for="summa">Summa</label>
      <input type="number" id="summa" v-model="sum" @blur="sBlur">
      <small v-if="sError">{{sError}}</small>
    </div>

    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Bajarildi</option>
        <option value="cancelled">Qaytarildi</option>
        <option value="active">Tasdiqlanmoqda</option>
        <option value="sending">Yuborilmoqda</option>
      </select>
    </div>
      <button class="btn primary">Qo'shish</button>
  </form>
</template>

<script>
import {useRequestForm} from "@/use/request-Form";
import {useStore} from "vuex";

export default {
  emits:["created"],
  name: "RequestModal",
  setup(_, {emit}){
    const store = useStore()
    const submit = async values =>{
      await store.dispatch("request/create", values)
      // console.log(values)
      emit("created") 
    }
    return{
      ...useRequestForm(submit)
    }
  }
}
</script>

<style scoped>

</style>