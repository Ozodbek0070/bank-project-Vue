<template>
  <app-page title="Yordam sahifa" back>
    <app-question
      v-for="q in savollar"
      :key="q.title"
      :question="q"
    ></app-question>
  </app-page>
</template>

<script>
import AppPage from "@/components/ui/AppPage";
import AppQuestion from "@/components/ui/AppQuestion";
export default {
  components:{
    AppPage,
    AppQuestion
  },
  setup(){
    const savollar = [
      {title:'Qalesan!?',
        text:'Yaxshi;)'},

      {title:'Nima gap?',
        text:'Tinchlik..'},

      {title:'Bu saytning mohiyati nimada?',
        text:"Ishing bo'lmasin..."},

      {title:"Dasturchi bilan qanday bog'lansam bo'ladi?",
        text:"+998(91)108-32-03"},
    ]

    return{
      savollar
    }
  }
}
</script>
