import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

const App = ({ history, onSignIn }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/auth/signin'>
          <Signin onSignIn={onSignIn} />
        </Route>
        <Route path='/auth/signup' component={Signup}>
          <Signup onSignIn={onSignIn} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
