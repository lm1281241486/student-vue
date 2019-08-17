import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import showToast from './tools/toast'

Vue.prototype.$toast = showToast
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
