import MainPage from '../pages/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router/dist/vue-router'
import AboutMe from '../pages/AboutMe.vue'
import Articles from '../pages/Articles.vue'

const routes = [
    {
        path: '/',
        name: MainPage,
        component: MainPage
    },
    {
        path: '/about-me',
        name: AboutMe,
        component: AboutMe
    },
    {
        path: '/articles',
        name: Articles,
        component: Articles
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
