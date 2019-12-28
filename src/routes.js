// Importing modules
import React from "react";
import { Switch, Route } from "react-router-dom";

// Importing components
import { Body } from "./components/Body/Body";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
import LoginPage from "./components/LoginPage/LoginPage";
import NoMatch from "./components/NoMatch/NoMatch";

// Creating routes
export default (
    <Body>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/gallery"} component={Gallery} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/offer"} component={Offer} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/login"} component={LoginPage} />
            <Route component={NoMatch} />
        </Switch>
    </Body>
)