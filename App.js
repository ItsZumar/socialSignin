import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const App = () => {
  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data.accessToken.toString());
            console.log('Facebook access token: ', result);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SIGN UP WITH SOCIAL PLATFORMS</Text>

      <TouchableOpacity
        onPress={loginWithFacebook}
        style={{padding: 20, backgroundColor: 'purple', marginTop: 10, borderRadius: 10}}>
        <Text style={{color: '#fff', fontSize: 18}}>Login with Facebook</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        onPress={() => currentProfile()}
        style={{padding: 20, backgroundColor: 'purple', marginTop: 10}}>
        <Text style={{color: '#fff'}}>GET CURRENT PROFILE</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default App;
