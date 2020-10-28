// Роутер
import VueRouter from 'vue-router'
// Components
import srcForm from "./form/index"
import srcHomePage from "./home-page/index"
import CarFull from "./car-full/index"
import ErrorComponent from "./error/error"
// Lazy loading
const Cars = resolve => {
    require.ensure('./cars/index', () => {
        resolve(
            require('./cars/index')
        )
    })
}
const Car = resolve => {
    require.ensure('./car/index', () => {
        resolve(
            require('./car/index')
        )
    })
}
// const flag = false
export default new VueRouter({
    routes: [
        {path: "", component: srcHomePage},
        {path: "/form", component: srcForm},
        {path: "/cars", component: Cars},
        {
            path: "/cars/:id",
            component: Car,
            children:
                [
                    {
                        path: 'full',
                        component: CarFull,
                        name: 'carFull',
                        beforeEnter(to, from, next) {
                            // console.log(to, from, next)
                            // if (flag) {
                            //     next(true)
                            // } else {
                            //     next(false)
                            // }
                            next()
                        }
                    }
                ]
        },
        {path: '/none', redirect: '/cars'},
        {path: '/none1', redirect: {name: 'carFull', params: {id: 1}}},
        {path: "*", component: ErrorComponent}
    ],
    mode: "history",
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        // default
        return {
            x: 0,
            y: 0
        }
    }
});
