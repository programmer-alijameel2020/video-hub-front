import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/User/Main.vue";
import Dashboard from "../views/User/Dashboard.vue";
import LandPage from "../views/LandPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "land-page",
    component: LandPage,
  },

  {
    path: "/main",
    name: "main",
    component: Main,
    redirect: "/Main/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
      },
    ],
    /*    //the protection layer for the rootes for unauthenticated
    beforeEnter: (to, from, next) => {
      if (!store.getters["authenticated"]) {
        return next({
          name: "Login",
        });
      }
      next();
    }, */
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
