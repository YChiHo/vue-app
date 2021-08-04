import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import GlobalComponent from '@/components/global-componenet.vue'
import IconBase from '@/components/Common/icon-base.vue'
Vue.component(IconBase.name, IconBase);
Vue.component(GlobalComponent.name, GlobalComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')