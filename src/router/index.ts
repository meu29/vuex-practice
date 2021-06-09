import { createRouter, createMemoryHistory, RouterHistory, Router } from "vue-router";
import Home from "./../pages/Home.vue";
import Product from "./../pages/Product.vue";
import Access from "../pages/Access.vue";

export const history: RouterHistory = createMemoryHistory();

const router: Router = createRouter({
    history: history,
    routes: [
        {path: "/", component: Home},
        {path: "/item/:itemId", component: Product},
        {path: "/access", component: Access}
    ]
});

export default router;