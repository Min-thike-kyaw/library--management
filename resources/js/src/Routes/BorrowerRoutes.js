import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/borrowers/Home";
import Add from "../components/borrowers/Add";
import Edit from "../components/borrowers/Edit";
import Detail from "../components/borrowers/Detail";

const BorrowerRoutes = () => {
    return <Switch>
        
        <Route exact path="/borrowers">
             <Home />
        </Route>

        <Route exact path="/borrowers/:id">
            <Detail />
        </Route>
        
        <Route path="/borrowers/add">
            <Add />
        </Route>
        
        <Route path="/borrowers/edit/:id">
            <Edit />
        </Route>
    </Switch>
}

export default BorrowerRoutes;