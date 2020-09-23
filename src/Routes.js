import HomeWeb from "./pages/Home";
import About from "./pages/About";
import Mien from "./pages/Mien";

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
  },
  {
    name: "Mien",
    path: "/mien",
    component: Mien,
    exact: true,
  }
];
