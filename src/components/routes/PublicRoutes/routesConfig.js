import Landing from "../../layout/components/Landing";
import Login from "../../auth/LoginPage";
import Register from "../../auth/RegisterPage";

const publicRoutes = [
  {
    exact: true,
    path: "/",
    component: Landing,
  },
  {
    exact: true,
    path: "/login",
    component: Login,
  },
  {
    exact: true,
    path: "/register",
    component: Register,
  },
];

export default publicRoutes;
