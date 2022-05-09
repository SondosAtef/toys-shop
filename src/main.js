import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import homeComp from "./components/home.vue";
import cartComp from "./components/cart.vue";
import aboutComp from "./components/aboutus.vue";
import deliveryComp from "./components/delivery.vue";
import category from "./components/categories/category.vue";

import login from "./components/registeration/loginForm.vue";
import signup from "./components/registeration/signupForm.vue";

import storeCopm from "./components/store/store.vue"
import toyDetailsComp from "./components/store/toyDetailes.vue"

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: homeComp,
  },
  {
    path: "/home",
    component: homeComp,
  },

  {
    path: "/Mycart",
    component: cartComp,
  },
  {
    path: "/About",
    component: aboutComp,
  },
  {
    path: "/DeliveryDetails",
    component: deliveryComp,
  },
  {
    path: "/controlcar",
    component: category,
  },
  {
    path: "/doll",
    component: category,
  },
  {
    path: "/game",
    component: category,
  },
  {
    path: "/popular",
    component: category,
  },
  {
    path: "/animals",
    component: category,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/signup",
    component: signup,
  },
  {
    path: "/categories",
    component: "",
  },
  {
    path: "/store",
    component: storeCopm,
  },
  {
    path:'/store/:id',
    component: toyDetailsComp,
},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
