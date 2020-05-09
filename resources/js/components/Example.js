import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./products/pages/Landing";
import MainNavbar from "./shared/components/MainNavbar";
import MainFooter from "./shared/components/MainFooter";

function Example() {
    return (
        <>
            <MainNavbar />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                </Switch>
            </Router>
            <MainFooter />
        </>
    );
}

export default Example;

if (document.getElementById("mm-app")) {
    ReactDOM.render(<Example />, document.getElementById("mm-app"));
}
