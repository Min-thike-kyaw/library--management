import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import BookRoutes from './Routes/BookRoutes';
import BorrowerRoutes from './Routes/BorrowerRoutes';
import AuthorRoutes from './Routes/AuthorRoutes';
import CategoryRoutes from './Routes/CategoryRoutes';
import BookRecord from './components/bookrecords.js/BookRecord';
import UserRoutes from './Routes/UserRoutes';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Auth from './functions/Auth';
import { Redirect } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';

// import AppContainer from './components/AppContainer';
// import schedule from 'node-schedule';

const App = () => {
    
    return (
        <Router>
            
            <>
                
                <BookRoutes />

                <BorrowerRoutes />

                <AuthorRoutes />

                <CategoryRoutes />

                <Route exact path="/book-records">
                    <BookRecord />
                </Route>
                
                <UserRoutes />
            
            </>

            
            
            
            
                    <Switch>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                    </Switch>        
            

            <Switch>
                <Route exact path="/search/:name">
                    <SearchBooks />
                </Route>
            </Switch>        
            
              

            
  
        </Router>
    );
}

// export default App;
ReactDOM.render(<App />, document.getElementById('app'));