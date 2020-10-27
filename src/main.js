// Vue , app component
import Vue from 'vue'
import App from './App.vue'
// Валидация
import Vuelidate from 'vuelidate'
// Роутер
import VueRouter from 'vue-router'
// Components
import srcForm from "./form/index";
import srcHomePage from "./home-page/index";
import Cars from "./cars/index"
import Car from "./car/index"
import CarFull from "./car-full/index"
// Use
Vue.use(Vuelidate)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: "", component: srcHomePage},
        {path: "/form", component: srcForm},
        {path: "/cars", component: Cars},
        {path: "/cars/:id", component: Car, children: [{path: 'full', component: CarFull, name: 'carFull'}]},
        // { path: "*", redirect: "/", component: srcHomePage }
    ], mode: "history"
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})
