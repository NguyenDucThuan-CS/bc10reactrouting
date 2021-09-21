import ListMovie from "../containers/HomeTemplates/ListMoviePage";
import HomePage from "./../containers/HomeTemplates/HomePage"
import AboutPage from "./../containers/HomeTemplates/AboutPage"
import DetailMoviePage from "../containers/HomeTemplates/DetailMoviePage";
import Dashboard from "../containers/AdminTemplates/Dashboards";
import AddUser from "../containers/AdminTemplates/AddUsers";
import HocPage from "../containers/HomeTemplates/HocPage";
import RenderProps from "../containers/HomeTemplates/renderProps";
import HooksPage from "../containers/HomeTemplates/HooksPage";
import AuthPage from "../containers/AdminTemplates/Auth";
import MaterialPage from "../containers/HomeTemplates/MaterialPage";
import StyledCmp from "../containers/HomeTemplates/StyleddCmpPage";
const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: "/about",
        component: AboutPage,
    },
    {
        exact: true,
        path: "/list-movie",
        component: ListMovie,
    },
    {
        exact: false,
        path: "/detail/:id",
        component: DetailMoviePage,
    },
    {
        exact: false,
        path: "/hoc",
        component: HocPage,
    },
    {
        exact: false,
        path: "/render-props",
        component: RenderProps,
    },
    {
        exact: false,
        path: "/hooks",
        component: HooksPage,
    },
    {
        exact: false,
        path: "/material",
        component: MaterialPage,
    },
    {
        exact: false,
        path: "/styled-cmp",
        component: StyledCmp,
    }
];
const routesAdmin = [
    {
        exact: false,
        path: "/dashboard",
        component: Dashboard,
    },
    {
        exact: false,
        path: "/add-user",
        component: AddUser,
    },
    /* {
        exact: false,
        path: "/auth",
        component: AuthPage,
    } */

];

export { routesHome, routesAdmin }