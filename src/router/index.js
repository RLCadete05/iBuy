import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import InsertItems from '../views/InsertItems.vue';
import LoginPage from '../views/LoginPage.vue';
import usePhotoGallery from '../views/photoGallery.vue';
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/insertitems',
        name: 'InsertItems',
        component: InsertItems,
    },
    {
        path: '/usephotogallery',
        name: 'usePhotoGallery',
        component: usePhotoGallery,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map