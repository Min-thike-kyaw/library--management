import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/books/Home";
import Add from "../components/books/Add";
import Edit from "../components/books/Edit";

const BookRoutes = () => {
    return <Switch>
        
        <Route exact path="/books/">
             <Home />
        </Route>

        <Route path="/books/add">
            <Add />
        </Route>
        

        <Route path="/books/edit/:id">
            <Edit />
        </Route>
    </Switch>
}

export default BookRoutes;