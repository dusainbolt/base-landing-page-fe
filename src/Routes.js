import HomeWeb from "./pages/Home";
import About from "./pages/About";
import Mien from "./pages/Mien";
import City from "./pages/City";
import Tour from "./pages/Tour";
import Help from "./pages/Help";
import Blog from "./pages/Blog";
import BlogChiTiet from "./pages/BlogChiTiet";
import TourChiTiet from "./pages/TourChiTiet";
import ShoppingCart from "./pages/ShoppingCart";
import Account from "./pages/Account";

export const WebRoutes = [
  {
    name: "Home",
    path: "/",
    component: HomeWeb,
    exact: true,
  },
  {
    name: "Blog",
    path: "/blog",
    component: Blog,
    exact: true,
  },
  {
    name: "BlogChiTiet",
    path: "/blog-chi-tiet",
    component: BlogChiTiet,
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
  },
  {
    name: "City",
    path: "/city",
    component: City,
    exact: true,
  },
  {
    name: "Tour",
    path: "/tour",
    component:Tour,
    exact: true,
  },
  {
    name: "TourChiTiet",
    path: "/tour-chi-tiet",
    component:TourChiTiet,
    exact: true,
  },
  {
    name: "ShoppingCart",
    path: "/shoppingcart",
    component: ShoppingCart,
    exact: true,
  },
  {
    name: "Account",
    path: "/account",
    component: Account,
    exact: true,
  },
  {
    name: "Help",
    path: "/help",
    component: Help,
    exact: true,
  }
];
