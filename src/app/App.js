import React from 'react';

import Dashboard from './Pages/Dashboard';
import CovidMap from './Pages/Map';
import Header from './Components/Utils/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/home'>
            <Dashboard />
          </Route>
          <Route exact path='/map'>
            <CovidMap />
          </Route>
        </Switch>
      </Router>
      <div className="footer"></div>
    </div>
  );
}

export default App;
