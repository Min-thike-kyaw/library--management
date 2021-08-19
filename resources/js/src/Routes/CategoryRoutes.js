import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Categories/Home";
import Detail from "../components/Categories/Detail"

const CategoryRoutes = () => {
    return <Switch>
        
        <Route exact path="/categories">
             <Home />
        </Route>
        
        <Route path="/categories/:id">
            <Detail />
        </Route>
    </Switch>
}

export default CategoryRoutes;