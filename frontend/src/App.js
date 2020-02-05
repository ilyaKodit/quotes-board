import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar";
import QuotesAll from "./components/QuotesAll";
import QuotesTopFive from "./components/QuotesTopFive";

class App extends Component{

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">

                        <Navbar />

                        <Switch>
                            <Route exact path={'/'} component={QuotesAll}/>
                            <Route path={'/top'} component={QuotesTopFive}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
