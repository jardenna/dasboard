import React, { lazy, Suspense, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';

// Instead of load all components on every render, we need to only load the component we need with lazy load and React Suspense component
const LazyLoadAuthComponent = lazy(() => import('./components/AuthApp'));
const LazyLoadMarketingComponent = lazy(() =>
  import('./components/MarketingApp')
);
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/auth' component={LazyLoadAuthComponent}>
              <LazyLoadAuthComponent onSignIn={() => setIsSignedIn(true)} />
            </Route>

            <Route path='/'>
              <LazyLoadMarketingComponent />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
