import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/pages/MainPage.vue";
import SecondPage from "../components/pages/SecondPage.vue";
import Display3 from "../components/pages/Display3.vue";
import Display4 from "../components/pages/Display4.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/reg",
    name: "SecondPage",
    component: SecondPage,
  },
  {
    path: "/disp3",
    name: "Display3",
    component: Display3,
  },
  {
    path: "/disp4",
    name: "Display4",
    component: Display4,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
