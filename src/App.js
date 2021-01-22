import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import "./App.css"

export default function App() {
    return (
        <Router>
            <div>
                <Link to="/" class="abcdef">Home</Link>
                <Link to="/streams" class="abcdef">Streams</Link>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>   
                    <Route exact path="/streams">
                        <Streams />
                    </Route>
                                     
                </Switch>
            </div>
        </Router>
    );
}


function Streams() {
    return <h2>Streams</h2>;
}
