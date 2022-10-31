import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/pages/Home.vue";
import Search from "@/views/pages/Search.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: '/search/:query',
        name: "search",
        component: Search
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
