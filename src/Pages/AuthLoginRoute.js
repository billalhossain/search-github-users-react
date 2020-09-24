import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function AuthLoginRoute({ children, ...rest }) {
    const { isAuthenticated } = useAuth0();
    return (
        <Route
        {...rest}
        render={() => {
            return isAuthenticated ? <Redirect to='/'></Redirect> : children;
        }}
        ></Route>
    );
}

export default AuthLoginRoute
