import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Pages/Home.vue";
import Pricing from "@/Pages/Pricing.vue";
import Login from "@/Pages/Login.vue";
import SignUp from "@/Pages/SignUp.vue";
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";

import "./assets/main.css";
import "./assets/tailwind.css";




const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        layout: DefaultLayout, // use DefaultLayout for this route
      },
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing,
        meta: {
          layout: DefaultLayout, // use DefaultLayout for this route
        },
      },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            layout: AuthLayout, // use AuthLayout for this route
        },
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
        meta: {
            layout: AuthLayout, // use AuthLayout for this route
        },
    },
  ],
});

createApp(App).use(router).mount("#app");

// routes: [
//     { path: "/", name: "Home", component: Pricing },
//     { path: "/login", name: "Login", component: Login },
//     { path: "/signup", name: "SignUp", component: SignUp },
//     {path: "/pricing", name: "Pricing", component: Pricing},
//     { path: "/:pathMatch(.*)*", name: "NotFound", component: Pricing}
//   ],
