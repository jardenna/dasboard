import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = ({ isSignedIn, onSignOut }) => {
  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <header>
      <NavLink to='/'>Home</NavLink>
      <NavLink to={isSignedIn ? '/' : '/auth/signin'} onClick={onClick}>
        {isSignedIn ? 'Logout' : 'Login'}
      </NavLink>
    </header>
  );
};
export default Header;
