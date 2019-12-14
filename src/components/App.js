import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.scss';
import Albums from './Albums/Albums';
import Login from './Login/Login';
import PrivateRoute from './privateRoute';

class App extends React.Component {
  state = {
    authenticated: false
  };
  componentDidMount() {
    if (localStorage.getItem('accessToken')) {
      this.setState({ authenticated: true });
    }
  }

  componentClicked = event => {
    console.log('Clicked', event);
  };
  responseFacebook = event => {
    console.log('RESPONSE ', event);
  };
  render() {
    const { authenticated } = this.state;
    return (
      <div className='App container'>
        {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </header> */}
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

export default App;
