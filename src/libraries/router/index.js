/* -------------------------------------------------------------------------- */
/*                                 Vue Router                                 */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Router Import ----------------------------- */
import { createRouter, createWebHistory } from 'vue-router';
/* -------------------------------------------------------------------------- */

/* ------------------------------- Components ------------------------------- */
import Home from '../../views/home/Home.vue';
import Detail from '../../views/detail/Detail.vue';
import PageNotFound from '../../views/PageNotFound/PageNotFound.vue';
/* -------------------------------------------------------------------------- */

/* --------------------------------- Routes --------------------------------- */
const routes = [
    {
        path: '/',
        redirect: '/home/1',
    },
    {
        path: '/home/:page',
        name: 'home',
        component: Home,
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    },
];
/* -------------------------------------------------------------------------- */

/* --------------------------------- Router --------------------------------- */
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
});
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

export default router;
