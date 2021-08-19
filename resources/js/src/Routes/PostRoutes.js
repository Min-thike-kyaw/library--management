import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Add from "../components/Add";
import Edit from "../components/Edit";

const PostRoutes = () => {
    return <Switch>
        <Route exact path="/">
                    <Home />
        </Route>

                <Route path="/add">
                    <Add />
                </Route>

                <Route path="/edit/:id">
                    <Edit />
                </Route>
    </Switch>
}

export default PostRoutes;