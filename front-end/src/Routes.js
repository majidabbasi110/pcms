import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import Report from './Report.js'
import AdminComplaints from './admin/AdminComplaints';
import ForwardComplaints from './admin/ForwardComplaints'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
               
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/form" exact component={Report} />
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={Dashboard}
                />
                <PrivateRoute
                    path="/user/dashboard/:uid/:passwordHash"
                    exact
                    component={Dashboard}
                />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={AdminDashboard}
                />
                <Route exact path="/complaints" exact component={AdminComplaints} />
        <Route
          exact
          path="/complaints/fwd"
          exact
          component={ForwardComplaints}
        />

               
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
