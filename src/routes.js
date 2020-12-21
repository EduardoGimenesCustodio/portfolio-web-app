import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Projects from "./pages/projects";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/projects" component={Projects} />
        </Switch>
    </BrowserRouter>
);

export default Routes;