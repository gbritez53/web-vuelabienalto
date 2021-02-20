//Layouts
import MainLayout from "../Layouts/MainLayout";
import LayoutAdmin from "../Layouts/LayoutAdmin";

//AdminPages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/Signin";

//Pages
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import CoursesList from "../pages/Courses/CoursesList";
import Servicios from "../pages/Servicios";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";

//CoursesPages
import Coaching from "../pages/Courses/Coaching";
import PNL from "../pages/Courses/PNL";
import FamiliarConst from "../pages/Courses/FamiliarConst";
import IntEmocional from "../pages/Courses/IntEmocional";
import Liderazgo from "../pages/Courses/Liderazgo";
import ComunicacionEfectiva from "../pages/Courses/ComunicacionEfectiva";
import Masoterapia from "../pages/Courses/Masoterapia";

const routes = [
  {
    path: "/admin",
    exact: false,
    component: LayoutAdmin,
    subroutes: [
      {
        path: "/admin",
        exact: true,
        component: AdminHome,
      },
      {
        path: "/admin/login",
        exact: true,
        component: AdminSignIn,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    exact: false,
    component: MainLayout,
    subroutes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/nosotros",
        exact: true,
        component: AboutUs,
      },
      {
        path: "/blog",
        exact: true,
        component: Blog,
      },
      {
        path: "/cursos",
        exact: true,
        component: CoursesList,
      },
      {
        path: "/cursos/coaching",
        exact: true,
        component: Coaching,
      },
      {
        path: "/cursos/pnl",
        exact: true,
        component: PNL,
      },
      {
        path: "/cursos/liderazgo",
        exact: true,
        component: Liderazgo,
      },
      {
        path: "/cursos/comunicacion-efectiva",
        exact: true,
        component: ComunicacionEfectiva,
      },
      {
        path: "/cursos/masoterapia",
        exact: true,
        component: Masoterapia,
      },
      {
        path: "/cursos/inteligencia-emocional",
        exact: true,
        component: IntEmocional,
      },
      {
        path: "/cursos/constelaciones-familiares",
        exact: true,
        component: FamiliarConst,
      },
      {
        path: "/cursos/coaching",
        exact: true,
        component: Coaching,
      },
      {
        path: "/servicios",
        exact: true,
        component: Servicios,
      },
      {
        path: "/contacto",
        exact: true,
        component: Contact,
      },

      {
        component: Error404,
      },
    ],
  },
];

export default routes;
