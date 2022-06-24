import { createRouter, createWebHashHistory, RouterScrollBehavior } from "vue-router"

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

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
        setTimeout(() => {
            const element = document.getElementById(to.hash.replace(/#/, ""))
            if (element && element.scrollIntoView) {
                element.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" })
            }
        }, 500)
        return { selector: to.hash }
    } else if (savedPosition) {
        return savedPosition
    }
    return { top: 0 }
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior
})

export default router
