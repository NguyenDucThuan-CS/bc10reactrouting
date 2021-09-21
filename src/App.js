import "./App.css";
import AboutPage from "./containers/HomeTemplates/AboutPage";
import HomePage from "./containers/HomeTemplates/HomePage";
import ListMovie from "./containers/HomeTemplates/ListMoviePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import Navbar from "./containers/HomeTemplates/_components/Navbar";
import NavbarAdmin from "./containers/AdminTemplates/_component/Navbar";
import { routesHome,  routesAdmin} from "./routes";
import HomeTemplate from "./containers/HomeTemplates";
import AdminTemplate from "./containers/AdminTemplates";
import AuthPage from "./containers/AdminTemplates/Auth";
import { useEffect } from "react";
import { actTryLogin } from "../src/containers/AdminTemplates/Auth/modules/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(actTryLogin())
  },[])

  
  const renderLayoutHome = (routes) => {
    return routes?.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      );
    });
  };

  const renderLayoutAdmin = (routesAdmin) => {
    return routesAdmin?.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      );
    });
  };
  return (
    <BrowserRouter>
     
      <Switch>
        {/* <HomePage />
      <AboutPage />
      <ListMovie /> */}
        {/* <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/list-movie" component={ListMovie} />
        <Route path="" component={PageNotFound} /> */}
        {renderLayoutHome(routesHome)};
        {renderLayoutAdmin(routesAdmin)};
        <Route path = "/auth" component = {AuthPage}/>
        {/* {renderLayoutHome(routesAdmin)} */}
     </Switch> 
    </BrowserRouter>
  );
}

export default App;
