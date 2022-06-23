import { createRouter, createWebHashHistory } from "vue-router"

const home = () => import("../pages/Home.vue")
const feedback = () => import("../pages/Feedback.vue")
const loading = () => import("../pages/Loading.vue")

const routes = [
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "home",
        component: home,
        meta: { showHeader: true, transition: "show" }
    },
    {
        path: "/feedback",
        name: "feedback",
        component: feedback,
        meta: { showHeader: true, transition: "show" }
    },
    {
        path: "/loading",
        name: "loading",
        component: loading,
        meta: { showHeader: false, transition: "fade" }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
