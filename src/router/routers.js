import { createRouter, createWebHistory } from "vue-router";
import Page404 from "../Page404.vue";
import MainPage from "../MainPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/page-not', component: Page404 },
    ]
});
