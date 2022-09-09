<template>
  <h4 v-if="requests.length === 0" class="text-center">Jadval bo'sh</h4>
  <table v-else>
    <thead>
      <tr>
        <th>#</th>
        <th>FISH</th>
        <th>Telefon</th>
        <th>Summa</th>
        <th>Status</th>
        <th>Amal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, idx) of requests" :key="r.id">
        <td>{{ idx +1 }}</td>
        <td>{{ r.fish }}</td>
        <td>{{ r.phone }}</td>
        <td>{{ currency(r.sum) }}</td>
        <td>
          <app-status :type="r.status"></app-status>
        </td>
        <td>
          <router-link
              v-slot="navigate"
              :to="{name:'Request', params:{id:r.id}}">
            <button class="btn" @click="navigate"> ko'rish </button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import {currency} from "@/utils/currency";
import AppStatus from "@/components/ui/AppStatus";
export default {
  props:["requests"],
  name: "RequestTable",
  components:{AppStatus},
  setup(){
    return{
      currency
    }
  }
}
</script>

<style scoped>

</style>