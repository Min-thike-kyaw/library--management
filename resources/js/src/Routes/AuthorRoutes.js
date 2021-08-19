import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/authors/Home";
import Detail from "../components/authors/Detail"
import Add from "../components/books/Add";
import Edit from "../components/books/Edit";

const AuthorRoutes = () => {
    return <Switch>
        
        <Route exact path="/authors">
             <Home />
        </Route>
        
        <Route path="/authors/:id">
            <Detail />
        </Route>
    </Switch>
}

export default AuthorRoutes;