import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start the app
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  // if we have a defaultHistory use that otherwise use createMemoryHistory
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDom.render(<App history={history} onSignIn={onSignIn} />, el);
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      //We need this check to prevent race conditions
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// run mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');
  if (devRoot) {
    // if Isolation we should use browserRouter
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// if through container export the mount function, so the container can deside when to mount the function
export { mount };
