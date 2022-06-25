import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/home.vue";
import morepage from "./pages/morepage.vue";
import cardpage from "./pages/card.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/more",
    name: "morepage",
    component: morepage,
  },
  {
    path: "/card",
    name: "cardpage",
    component: cardpage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;