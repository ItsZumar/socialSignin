import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LoginButton, AccessToken, Profile} from 'react-native-fbsdk-next';

const App = () => {
  
  const currentProfile = async () => {
    let currProfile = await Profile.getCurrentProfile();

    if (currProfile) {
      console.log('The current logged user is: ' + currProfile.name + '. His profile id is: ' + currProfile.userID );

      AccessToken.getCurrentAccessToken().then(data => {
        console.log('AccessToken: ' + data.accessToken.toString());
      });
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SIGN UP WITH SOCIAL PLATFORMS</Text>

      <LoginButton
        onLoginFinished={(error, result) => {
          console.log('result: ', result);

          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log('AccessToken: ' + data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />

      <TouchableOpacity
        onPress={() => currentProfile()}
        style={{padding: 20, backgroundColor: 'purple', marginTop: 10}}>
        <Text style={{color: '#fff'}}>GET CURRENT PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
