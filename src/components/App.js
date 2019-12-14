import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import facebookAPI from '../api/facebook';

// import logo from './logo.svg';
import './App.scss';
import Albums from './Albums/Albums';
import Login from './Login/Login';
import PrivateRoute from './privateRoute';
import { getUserData, getUserDataSuccess } from '../actions';

class App extends React.Component {
  state = {
    authenticated: false
  };
  componentDidMount() {
    console.log('PROPS', this.props);
    if (localStorage.getItem('accessToken')) {
      this.setState({ authenticated: true });
    }

    facebookAPI.checkLoginStatus(response => {
      if (response.status !== 'connected') {
        // login error - redirect to login
        this.props.history.push('/login');
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn } = this.props;
    if (isLoggedIn && isLoggedIn !== prevProps.isLoggedIn) {
      // fetch user data like albums, etc
      facebookAPI.getAlbums(response => {
        const albums = response.albums || { data: [] };
        this.props.gotUserData(albums.data);
        this.props.history.push('/facebook-albums');
      });
    }
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className='App container'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/facebook-albums' authenticated={isLoggedIn}>
            <Albums />
          </PrivateRoute>
          <Route path='/'>
            <Redirect
              to={{
                pathname: '/facebook-albums'
              }}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({ isLoggedIn: state.userData.isLoggedIn });

export default withRouter(
  connect(mapStateToProps, {
    getUserData: getUserData,
    gotUserData: getUserDataSuccess
  })(App)
);
