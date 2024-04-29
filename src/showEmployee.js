import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Employee from './components/Employee';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {showEmployee && (
            <Route path="/employee" component={Employee} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
