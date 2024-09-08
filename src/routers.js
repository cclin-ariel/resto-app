import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import UpdateResto from "./components/HomeComponent/UpdateResto.vue";
import AddResto from "./components/HomeComponent/AddResto.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "AddResto",
    component: AddResto,
    path: "/add-resto",
  },
  {
    name: "UpdateResto",
    component: UpdateResto,
    path: "/update-resto/:id",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/resto-login",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
