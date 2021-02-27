import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import {Button,Breadcrumb} from "ant-design-vue";

Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(Button);
Vue.use(Breadcrumb);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
