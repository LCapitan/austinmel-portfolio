import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./react/pages/Home";
import Draw from "./react/pages/Draw";
import Develop from "./react/pages/Develop";
import Profile from "./react/pages/Profile";

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route path="/draw" component={Draw}/>
                        <Route path="/develop" component={Develop}/>
                        <Route path="/profile" component={Profile}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
