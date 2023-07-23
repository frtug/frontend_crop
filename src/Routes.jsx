import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import EditProfile from "./Pages/Profile/components/EditProfile";
import Profile from "./Pages/Profile";
import Register from "./Pages/LandingPage/components/Register/index";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import CropRecommendation from "./Pages/CropRecommendationHome/Components/CropRecommendation";
import EventScheduler from "./Pages/Scheduler/Scheduler";

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
              pathname: "/",
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

const Routes = () => {
  return (
    <div style={{ height: "calc(100vh - 65px)" }}>
      <Switch>
        <NormalRoute exact path="/" component={LandingPage} />
        <NormalRoute path="/register" component={Register} exact strict />
        <PrivateRoute path="/home" component={HomePage} exact strict />
        <PrivateRoute path="/profile" component={Profile} exact strict />
        <PrivateRoute
          path="/scheduler"
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
          path="/cropRecommendation"
          component={CropRecommendation}
          exact
          strict
        />
        
        
      </Switch>
    </div>
  );
};

export default Routes;
