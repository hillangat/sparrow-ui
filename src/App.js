import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import './App.css';

import Feed from "./components/feed/Feed";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import PageNotFound from "./components/common/PageNotFound";
import Login from "./components/login/Login";
import NavBar from "./components/common/NavBar";
import Users from "./components/users/Users";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)
library.add(faTimes)


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/users" component={Users} exact />
                        <Route path="/login" component={Login}/>
                        <Route path="/feed" component={Feed}/>
                        <Route path="/profile" component={Profile}/>
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;