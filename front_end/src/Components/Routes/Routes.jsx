import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home"
import About from "../About/About";
import Contect from "../Contect/Contect";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Logout from "../Logout/Logout";
function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>

                <Route exact path="/contect">
                    <Contect />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/register">
                    <Register />
                </Route>

                <Route exact path="/logout">
                    <Logout />
                </Route>
                {/* if path not exists then show the error page */}
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </>
    )
}

export default Routes
