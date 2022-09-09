<template>
  <app-loader v-if="loading"></app-loader>

  <app-page  v-else  title="Arizalar ro'yhati">
      <template #header>
        <button class="btn primary" @click="modal = true">Qo'shish</button>
      </template>
    <request-filter v-model="filters"></request-filter>
     <request-table :requests="requests" class="table"></request-table>

     <app-modal v-if="modal" title="Ariza qo'shish" @close="modal = false">
        <request-modal @created="modal=false"></request-modal>
     </app-modal>
   </app-page>
</template>

<script>
import AppPage from "@/components/ui/AppPage";
import RequestFilter from "@/components/request/RequestFilter";
import RequestTable from "@/components/request/RequestTable";
import AppModal from "@/components/ui/AppModal";
import RequestModal from "@/components/request/RequestModal";
import AppLoader from "@/components/ui/AppLoader";
import {useStore} from "vuex";
import {ref, computed, onMounted, watch} from "vue";

export default {
  components: {
    AppPage,
    RequestModal,
    RequestTable,
    AppModal,
    AppLoader,
    RequestFilter

  },
  setup(){
    const loading = ref(false)
    const modal = ref(false)
    const store = useStore()
    const filters = ref({})

    watch(filters, val=>console.log(val))

    const requests = computed(()=>store.getters["request/requests"]
        .filter(request=>{
          if(filters.value.name){
            return request.fish.includes(filters.value.name)
          }
          return request
        })
        .filter(request=>{
          if(filters.value.status){
            return filters.value.status===request.status
          }
          return request
        })
    )

    onMounted(async ()=>{
      loading.value=true
      await store.dispatch('request/load')
      loading.value=false

    })
    return{
      modal,
      requests,
      loading,
      filters
    }
  }
}
</script>
