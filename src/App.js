import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Home, ErrorPage, Post } from './pages'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:id" component={Post} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
