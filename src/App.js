import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import "./App.css"
import Streams from "./views/Streams"

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>   
                <Route exact path="/streams">
                    <Streams />
                </Route>                                 
            </Switch>
        </Router>
    );
}