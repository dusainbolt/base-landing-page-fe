import HomeWeb from "./pages/Home";
import About from "./pages/About";
export const WebRoutes = [
  {
    name: "Home",
    path: "/",
    component: HomeWeb,
    exact: true,
  },
  {
    name: "About",
    path: "/about",
    component: About,
    exact: true,
  }
];
