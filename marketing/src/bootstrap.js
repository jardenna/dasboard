import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// Mount function to start the app

// if Develop mode and isolation

const mount = (el) => {
  ReactDom.render(<App />, el);
};

// run mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// if through container export the mount function, so the container can deside when to mount the function
export { mount };
