import React from 'react';
import { Redirect } from 'react-router';

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem('user');
    if (isAuth) {
      return <Component />;
    }
    return <Redirect to="/" />;
  };
  return AuthRoute;
};

export default withAuth;
