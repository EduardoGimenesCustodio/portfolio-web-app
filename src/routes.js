import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/main";
import Projects from "./pages/projects";

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/projects" component={Projects} />
        </Switch>
    </BrowserRouter>
);

export default Routes;