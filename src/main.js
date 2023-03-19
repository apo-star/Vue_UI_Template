import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Pages/Home.vue";
import Pricing from "@/Pages/Pricing.vue";
import Login from "@/Pages/Login.vue";
import SignUp from "@/Pages/SignUp.vue";
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";
import Dashboard from "@/Pages/Dashboard.vue";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import store from "./Config/store.js";

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
      path: "/pricing",
      name: "Pricing",
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
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["user"];
        if (isAuthenticated) {
          next({ name: "Dashboard" });
        } else {
          next();
        }
      },
      
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
      meta: {
        layout: AuthLayout, // use AuthLayout for this route
      },
        beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["user"];
        if (isAuthenticated) {
            next({ name: "Dashboard" });
        } else {
            next();
        }
    },
   
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        layout: DashboardLayout, // use DashboardLayout for this route
      },
        beforeEnter: (to, from, next) => {
       if (store.getters["user"]) {
            next();
        } else {
            next({ name: "Login" });
        }
    },
    },
  ],
});


// router.beforeEach((to, from, next) => {
//     const isAuthenticated = store.getters["user"];
  
//     if (to.name === "Login" || to.name === "SignUp") {
//       if (isAuthenticated) {
//         next({ name: "Dashboard" });
//       } else {
//         next();
//       }
//     } else if (to.name === "Dashboard") {
//       if (isAuthenticated) {
//         next();
//       } else {
//         next({ name: "Login" });
//       }
//     } else {
//       next();
//     }
//   });

//   export default router;

createApp(App).use(router).use(store).mount("#app");

// routes: [
//     { path: "/", name: "Home", component: Pricing },
//     { path: "/login", name: "Login", component: Login },
//     { path: "/signup", name: "SignUp", component: SignUp },
//     {path: "/pricing", name: "Pricing", component: Pricing},
//     { path: "/:pathMatch(.*)*", name: "NotFound", component: Pricing}
//   ],
