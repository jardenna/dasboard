import React, { lazy, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';

// Instead of load all components on every render, we need to only load the component we need with lazy load and React Suspense component
const lazyLoadAuthComponent = lazy(() => import('./components/AuthApp'));
const lazyLoadMarketingComponent = lazy(() =>
  import('./components/MarketingApp')
);
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/auth' component={lazyLoadAuthComponent} />
            <Route path='/' component={lazyLoadMarketingComponent} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
