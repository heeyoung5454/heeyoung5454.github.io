import Vue from 'vue'
import App from './App.vue'
import router from './router' // 라우터 임포트
import VueMoment from 'vue-moment'

// -------------부트스트랩 css 추가 시작
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueMoment)

// -------------부트스트랩 css 추가
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

new Vue({
  router,           //라우터호출
  render: h => h(App),
}).$mount('#app')
