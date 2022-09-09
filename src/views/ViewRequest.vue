<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="Arizani ko'rish" v-else-if="request"  back>
    <p><strong>FISH</strong> : {{request.fish}}</p>
    <p><strong>TELEFON</strong> : {{request.phone}}</p>
    <p><strong>STATUS</strong> : <app-status :type="request.status"></app-status></p>
    <p><strong>SUMMA</strong> : {{currency(request.sum)}}</p><br>
    <div class="form-control">
      <label for="status">Statusni o'zgartirish</label>
      <select id="status" v-model="status">
        <option value="done">Bajarildi</option>
        <option value="cancelled">Qaytarildi</option>
        <option value="active">Tasdiqlanmoqda</option>
        <option value="sending">Yuborilmoqda</option>
      </select>
    </div>
    <button class="btn danger" @click="remove">O'chirish</button>
    <button class="btn" @click="update" v-if="hasChange">O'zgartirish</button>
  </app-page>
  <h3 v-else class="text-center text-white">Bunday ID {{$route.params.id}} lik Ariza topilmadi!</h3>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";
import AppPage from "@/components/ui/AppPage";
import AppStatus from "@/components/ui/AppStatus";
import AppLoader from "@/components/ui/AppLoader";
import {currency} from "@/utils/currency";

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})
    const status = ref()

    onMounted(async ()=>{
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      status.value = request.value.status
      loading.value = false
    })
    const hasChange = computed(()=> request.value.status !== status.value)

    const remove = async ()=>{
      await store.dispatch("request/remove", route.params.id)
      router.push('/')
    }

    const update = async ()=>{
      const data = {...request.value, status:status.value, id:route.params.id}
      await store.dispatch("request/update", data)
      request.value.status = status.value
    }

    return {
      request,
      currency,
      loading,
      remove,
      update,
      status,
      hasChange,
    }
  },
  components:{
    AppStatus,
    AppPage,
    AppLoader,
  }
}
</script>

<!--website deploy-->


<!--Microsoft Windows [Version 10.0.19044.1387]-->
<!--(c) Корпорация Майкрософт (Microsoft Corporation). Все права защищены.-->

<!--C:\Users\Sky>cd /Desktop-->
<!--Системе не удается найти указанный путь.-->

<!--C:\Users\Sky>cd/Desktop-->
<!--Системе не удается найти указанный путь.-->

<!--C:\Users\Sky>cd /..Desktop-->
<!--Системе не удается найти указанный путь.-->

<!--C:\Users\Sky>cd Desktop-->

<!--C:\Users\Sky\Desktop>cd vue_amaliyot-->

<!--C:\Users\Sky\Desktop\vue_amaliyot>npm run build-->

<!--&gt; vue_amaliyot@0.1.0 build-->
<!--&gt; vue-cli-service build-->

<!--All browser targets in the browserslist configuration have supported ES module.-->
<!--Therefore we don't build two separate bundles for differential loading.-->


<!--\  Building for production...-->

<!--WARNING  Compiled with 1 warning                                                                               23:54:21-->
<!--warning-->

<!--entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.-->
<!--Entrypoints:-->
<!--app (260 KiB)-->
<!--js/chunk-vendors.62a33972.js-->
<!--css/app.5785d2be.css-->
<!--js/app.ab80b307.js-->


<!--File                                 Size                                   Gzipped-->

<!--dist\js\chunk-vendors.62a33972.js    235.50 KiB                             79.35 KiB-->
<!--dist\js\app.ab80b307.js              18.42 KiB                              6.67 KiB-->
<!--dist\js\235.c48061b3.js              2.50 KiB                               1.19 KiB-->
<!--dist\js\642.9c573b03.js              2.43 KiB                               1.17 KiB-->
<!--dist\js\34.6ee0304b.js               1.30 KiB                               0.72 KiB-->
<!--dist\css\app.5785d2be.css            5.62 KiB                               1.83 KiB-->

<!--Images and other types of assets omitted.-->
<!--Build at: 2022-07-05T18:54:21.075Z - Hash: 24f48cc1519b706c - Time: 12259ms-->

<!--DONE  Build complete. The dist directory is ready to be deployed.-->
<!--INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html-->


<!--C:\Users\Sky\Desktop\vue_amaliyot>npm install -g firebase-tools-->
<!--npm WARN deprecated har-validator@5.1.3: this library is no longer supported-->
<!--npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)-->
<!--npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.-->
<!--npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142-->

<!--changed 696 packages, and audited 697 packages in 2m-->

<!--39 packages are looking for funding-->
<!--run `npm fund` for details-->

<!--27 vulnerabilities (21 moderate, 6 high)-->

<!--To address issues that do not require attention, run:-->
<!--npm audit fix-->

<!--To address all issues (including breaking changes), run:-->
<!--npm audit fix &#45;&#45;force-->

<!--Run `npm audit` for details.-->

<!--C:\Users\Sky\Desktop\vue_amaliyot>npm audit fix-->

<!--up to date, audited 956 packages in 4s-->

<!--97 packages are looking for funding-->
<!--run `npm fund` for details-->

<!--found 0 vulnerabilities-->

<!--C:\Users\Sky\Desktop\vue_amaliyot>npm install -g firebase-tools-->
<!--npm WARN deprecated har-validator@5.1.3: this library is no longer supported-->
<!--npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)-->
<!--npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.-->
<!--npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142-->

<!--changed 696 packages, and audited 697 packages in 28s-->

<!--39 packages are looking for funding-->
<!--run `npm fund` for details-->

<!--27 vulnerabilities (21 moderate, 6 high)-->

<!--To address issues that do not require attention, run:-->
<!--npm audit fix-->

<!--To address all issues (including breaking changes), run:-->
<!--npm audit fix &#45;&#45;force-->

<!--Run `npm audit` for details.-->

<!--C:\Users\Sky\Desktop\vue_amaliyot>firebase login-->
<!--i  Firebase optionally collects CLI usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.-->

<!--? Allow Firebase to collect CLI usage and error reporting information? Yes-->
<!--i  To change your data collection preference at any time, run `firebase logout` and log in again.-->

<!--Visit this URL on this device to log in:-->
<!--https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=853205686&redirect_uri=http%3A%2F%2Flocalhost%3A9005-->

<!--Waiting for authentication...-->

<!--+  Success! Logged in as ulugbekovozodbek65@gmail.com-->

<!--C:\Users\Sky\Desktop\vue_amaliyot>firebase init-->

<!--######## #### ########  ######## ########     ###     ######  ########-->
<!--##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##-->
<!--######    ##  ########  ######   ########  #########  ######  ######-->
<!--##        ##  ##    ##  ##       ##     ## ##     ##       ## ##-->
<!--##       #### ##     ## ######## ########  ##     ##  ######  ########-->

<!--You're about to initialize a Firebase project in this directory:-->

<!--C:\Users\Sky\Desktop\vue_amaliyot-->

<!--? Are you ready to proceed? Yes-->
<!--? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices.-->

<!--Error: Must select at least one feature. Use SPACEBAR to select features, or specify a feature by running firebase init [feature_name]-->

<!--C:\Users\Sky\Desktop\vue_amaliyot>firebase init-->

<!--######## #### ########  ######## ########     ###     ######  ########-->
<!--##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##-->
<!--######    ##  ########  ######   ########  #########  ######  ######-->
<!--##        ##  ##    ##  ##       ##     ## ##     ##       ## ##-->
<!--##       #### ##     ## ######## ########  ##     ##  ######  ########-->

<!--You're about to initialize a Firebase project in this directory:-->

<!--C:\Users\Sky\Desktop\vue_amaliyot-->

<!--? Are you ready to proceed? Yes-->
<!--? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys-->

<!--=== Project Setup-->

<!--First, let's associate this project directory with a Firebase project.-->
<!--You can create multiple project aliases by running firebase use &#45;&#45;add,-->
<!--but for now we'll just set up a default project.-->

<!--? Please select an option: Use an existing project-->
<!--? Select a default Firebase project for this directory: amaliyot-bank-firstproject (Amaliyot-bank-firstProject)-->
<!--i  Using project amaliyot-bank-firstproject (Amaliyot-bank-firstProject)-->

<!--=== Hosting Setup-->

<!--Your public directory is the folder (relative to your project directory) that-->
<!--will contain Hosting assets to be uploaded with firebase deploy. If you-->
<!--have a build process for your assets, use your build's output directory.-->

<!--? What do you want to use as your public directory? dist-->
<!--? Configure as a single-page app (rewrite all urls to /index.html)? Yes-->
<!--? Set up automatic builds and deploys with GitHub? No-->
<!--? File dist/index.html already exists. Overwrite? No-->
<!--i  Skipping write of dist/index.html-->

<!--i  Writing configuration info to firebase.json...-->
<!--i  Writing project information to .firebaserc...-->

<!--+  Firebase initialization complete!-->

<!--C:\Users\Sky\Desktop\vue_amaliyot>firebase deploy-->

<!--=== Deploying to 'amaliyot-bank-firstproject'...-->

<!--i  deploying hosting-->
<!--i  hosting[amaliyot-bank-firstproject]: beginning deploy...-->
<!--i  hosting[amaliyot-bank-firstproject]: found 13 files in dist-->
<!--+  hosting[amaliyot-bank-firstproject]: file upload complete-->
<!--i  hosting[amaliyot-bank-firstproject]: finalizing version...-->
<!--+  hosting[amaliyot-bank-firstproject]: version finalized-->
<!--i  hosting[amaliyot-bank-firstproject]: releasing new version...-->
<!--+  hosting[amaliyot-bank-firstproject]: release complete-->

<!--+  Deploy complete!-->

<!--Project Console: https://console.firebase.google.com/project/amaliyot-bank-firstproject/overview-->
<!--Hosting URL: https://amaliyot-bank-firstproject.web.app-->

<!--C:\Users\Sky\Desktop\vue_amaliyot>-->