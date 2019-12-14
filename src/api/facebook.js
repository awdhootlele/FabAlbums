function facebookAPI() {
  const returnVal = {};
  // Note - we wait till the facebook sdk is loaded in the app usng promises (see index.html)
  const facebookPromise = window._onFacebook;

  // TODO - default callbacks are for testing only - we can remove them later
  returnVal.login = function(callback) {
    const defaultCallback = function(response) {
      // dispatch actions
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        // FB.api('/me', function(response) {
        //   console.log('Good to see you, ' + response.name + '.', response);
        // });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    };
    facebookPromise.then(FB => {
      FB && FB.login(callback || defaultCallback, { scope: 'user_photos' });
    });
  };
  returnVal.getAlbums = function(callback) {
    const defaultCallback = response => {
      console.log('Albums', response.albums);
    };
    facebookPromise.then(FB => {
      FB && FB.api('/me?fields=albums', callback || defaultCallback);
    });
  };
  returnVal.getUserProfile = function(callback) {
    const defaultCbk = function(response) {
      console.log('USER PROFILE,', response);
    };
    facebookPromise.then(FB => {
      FB && FB.api('/me?fields=id,name,birthday,email,hometown, picture.width(200).height(200)', callback || defaultCbk);
    });
  };
  returnVal.checkLoginStatus = function(callback) {
    const defaultCbk = function(response) {
      if (response.status === 'connected') {
        // The user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token
        // and signed request each expire.
        // const uid = response.authResponse.userID;
        // const accessToken = response.authResponse.accessToken;
      } else if (response.status === 'not_authorized') {
        // The user hasn't authorized your application.  They
        // must click the Login button, or you must call FB.login
        // in response to a user gesture, to launch a login dialog.
      } else {
        // The user isn't logged in to Facebook. You can launch a
        // login dialog with a user gesture, but the user may have
        // to log in to Facebook before authorizing your application.
      }
    };
    facebookPromise.then(FB => {
      FB && FB.getLoginStatus(callback || defaultCbk);
    });
  };
  return returnVal;
}

export default facebookAPI();
