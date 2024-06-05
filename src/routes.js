import { createRouter, createMemoryHistory } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Activities from "./pages/Activities.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/activities", component: Activities },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
