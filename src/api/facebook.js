
function facebookAPI() {
  const returnVal = {};  
  const { FB } = window;
  if (FB) {
    returnVal.login = function(callback) {
      const defaultCallback = function(response) {
        console.log('RES', response);
        // dispatch actions
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.', response);
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      };
      FB.login(callback || defaultCallback, { scope: 'user_photos' });
    };
    returnVal.getAlbums = function(callback) {
      const defaultCallback = response => {
        console.log('Albums', response.albums)
      };
      FB.api('/me?fields=albums', callback || defaultCallback);
    };
  }
  return returnVal;
}

export default facebookAPI();
