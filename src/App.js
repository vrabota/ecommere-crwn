import React, { useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'pages/HomePage';
import Shop from 'pages/Shop';
import SignIn from 'pages/SignIn';
import Checkout from 'pages/Checkout';
import Header from 'components/Header';
import { useAuth } from 'utils/useAuth';
import { setCurrentUser } from 'redux/user/actions';
import { selectCurrentUser } from './redux/user/selectors';

import { APP_ROUTES_URL } from './constants';

import './App.css';

function App({ setCurrentUser, currentUser }) {
  const { initializing, user } = useAuth();
  useEffect(() => {
    setCurrentUser(user);
  }, [user, setCurrentUser]);

  if (initializing) {
    return <div>Loading...</div>;
  }

  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path={APP_ROUTES_URL.HOME} component={HomePage} />
            <Route path={APP_ROUTES_URL.SHOP} component={Shop} />
            <Route path={APP_ROUTES_URL.CHECKOUT} component={Checkout} />
            <Route exact path={APP_ROUTES_URL.SIGN_IN} render={
              () => currentUser ? <Redirect to={APP_ROUTES_URL.HOME}/> : <SignIn />
            } />
          </Switch>
        </Router>
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
