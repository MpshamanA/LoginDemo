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
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/user/:id",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//ナビゲーションガード
//to.params.idが5だった場合Homeに遷移する
//nextでログインしてくださいのページに飛ばすことができる
router.beforeEach((to, from, next) => {
  /* console.log("router: beforeEnter");
  console.log(to.params.id); */
  if (to.params.id === "5") {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
