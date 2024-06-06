import { createRouter, createMemoryHistory } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Parks from "./pages/Parks.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/parks", component: Parks },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
