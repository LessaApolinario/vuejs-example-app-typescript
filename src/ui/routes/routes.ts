import { type RouteRecordRaw } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

export const routes: RouteRecordRaw[] = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/:pathMatch(.*)*", name: "NotFoundPage", component: NotFoundPage },
];
