import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import EditProfile from "./Pages/Profile/components/EditProfile";
import Profile from "./Pages/Profile";
import Register from "./Pages/LandingPage/components/Register/index";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/LandingPage/components/Login"
import HomePage from "./Pages/HomePage";
import CropRecommendation from "./Pages/CropRecommendationHome/Components/CropRecommendation";
import EventScheduler from "./Pages/Scheduler/Scheduler";
import BottomNav from "./Components/BottomNav/bottomNav";
import About from "./Pages/About";
import Crop from "./Pages/CropInformationHome"
import application from "./Pages/Application/application";
const PrivateRoute = ({ children, component: Component, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
const NormalRoute = ({ children, component: Component, ...rest }) => {
  const isLoggedIn = !localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
const PrivateNav = ({children, ...rest})=>{
  const isLoggedIn = localStorage.getItem("token");
   return <>
  {
    isLoggedIn && <>{children}</>
  }
  </>
}

const Routes = () => {
  return (
    <div style={{height:"100%",position:"relative"}}>
      <PrivateNav>
        <BottomNav/>
      </PrivateNav>
      <Switch>
        {/* we will have here a statup page which will open login and signup page */}
        <NormalRoute exact path="/" component={LandingPage} />
        <NormalRoute exact path="/login" component={Login} />
        <NormalRoute path="/register" component={Register} exact strict />
        <PrivateRoute path="/home" component={HomePage} exact strict />
        <PrivateRoute path="/profile" component={Profile} exact strict />
        <PrivateRoute path="/app" component={application} exact strict />
        <PrivateRoute path="/crop" component={Crop} exact strict />
        <PrivateRoute path="/about" component={About} exact strict />
        <PrivateRoute
          path="/app/scheduler"
          component={EventScheduler}
          exact
          strict
        />
        <PrivateRoute
          path="/editprofile"
          component={EditProfile}
          exact
          strict
        />
        <PrivateRoute
          path="/app/cropRecommendation"
          component={CropRecommendation}
          exact
          strict
        />
      </Switch>
      
      
    </div>
  );
};

export default Routes;
