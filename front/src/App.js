import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Navbar from './Navbar';
import Home from './Home';
import Visitor from './Visitor';
import Connected from './Connected';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/visitor" component={Visitor} />
        <PrivateRoute path="/connected" component={Connected} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
