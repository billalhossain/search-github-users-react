import React, { useContext } from 'react';
import './App.css';
import {Dashboard, Error, Login, PrivateRoute, AuthWrapper, AuthLoginRoute} from './Pages'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <AuthWrapper>
    <Router>
      <Switch>
        <PrivateRoute path='/' exact>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <AuthLoginRoute path='/login' exact>
          <Login></Login>
        </AuthLoginRoute>
        {/* <Route path='/login'>
          <Login></Login>
        </Route> */}
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  </AuthWrapper>
  );
}

export default App
