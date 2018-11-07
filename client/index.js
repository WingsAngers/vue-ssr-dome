import Vue from 'vue'
import App from './app.vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
import './assets/styles/global.styl'
import createdRouter from './config/router'
import store from './store/store'
const router = createdRouter()

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')