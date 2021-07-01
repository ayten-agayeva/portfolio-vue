import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/about"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
      children: [
        {
          path: "",
          name: "ProfilePost",
          component: () =>
            import(/* webpackChunkName: "profile" */ "../views/profile/post")
        },
        {
          path: "save",
          name: "ProfileSave",
          component: () =>
            import(/* webpackChunkName: "profile" */ "../views/profile/save")
        },
        {
          path: "tag",
          name: "ProfileTag",
          component: () =>
            import(/* webpackChunkName: "profile" */ "../views/profile/tag")
        }
      ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
