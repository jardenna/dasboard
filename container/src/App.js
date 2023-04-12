import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/auth' component={AuthApp} />
          <Route path='/' component={MarketingApp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
