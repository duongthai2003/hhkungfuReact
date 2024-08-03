import CategoryMovies from "../categoryMovies/categoryMovies";
import Home from "../Home/Home";
import InfoMovie from "../InfoMovie/infoMovie";
import ShowMovie from "../showMovie/showMovie";

export const PublicRoute = [
  {
    path: "/",
    component: Home,
    // layout: null,
  },
  {
    path: "/:namefirm",
    component: InfoMovie,
  },
  {
    path: "/:namefirm/:episode",
    component: ShowMovie,
  },
  {
    path: "/category/:categoryID",
    component: CategoryMovies,
  },
];
