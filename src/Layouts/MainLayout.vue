<template>
  <div class="container with-nav">
    <the-navbar></the-navbar>
    <app-message></app-message>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import AppMessage from "@/components/ui/AppMessage";
export default {
  name: "MainLayout",
  components:{
    TheNavbar,
    AppMessage
  }
}
</script>

<style scoped>

</style>