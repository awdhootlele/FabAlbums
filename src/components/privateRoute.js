import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function privateRoute({ children, authenticated, ...rest }) {
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }></Route>
  );
}
