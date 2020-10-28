// Vue , app component
import Vue from 'vue'
import App from './App.vue'
// Валидация
import Vuelidate from 'vuelidate'
// Роутер
import VueRouter from 'vue-router'
// My router
import router from './routes'
// Use
Vue.use(VueRouter)
Vue.use(Vuelidate)


new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})
