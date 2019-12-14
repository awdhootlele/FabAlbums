import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
    if (localStorage.getItem('accessToken')) {
      this.setState({ authenticated: true });
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn } = this.props;
    if (isLoggedIn && isLoggedIn !== prevProps.isLoggedIn) {
      // fetch user data like albums, etc
      facebookAPI.getAlbums(response => {
        const albums = response.albums || { data: [] };
        console.log('ALBUMS ', response);
        this.props.gotUserData(albums.data);
      });
    }
  }
  render() {
    const { authenticated } = this.state;
    return (
      <div className='App container'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/facebook-albums' authenticated={authenticated}>
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

export default connect(mapStateToProps, {
  getUserData: getUserData,
  gotUserData: getUserDataSuccess
})(App);
