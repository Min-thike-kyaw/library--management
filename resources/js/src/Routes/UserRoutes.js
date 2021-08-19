import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/users/Home";
import Add from "../components/users/Add";
import Edit from "../components/users/Edit";

const UserRoutes = () => {
    return <Switch>
        
        <Route exact path="/users/">
            <Home />
        </Route>

        <Route path="/users/add">
            <Add />
        </Route>
        

        <Route path="/users/edit/:id">
            <Edit />
        </Route>
    </Switch>
}

export default UserRoutes;