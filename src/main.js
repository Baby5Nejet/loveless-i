import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './route';
// Vue.use(VueRouter)
Vue.use(ViewUI);


Vue.config.productionTip = false

new Vue({
  render: h  => h(App),
  router
}).$mount('#app')
