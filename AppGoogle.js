import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const App = () => {
  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then(result => {
        console.log("result :: ", result);
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('User cancelled the login flow !');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Google play services not available or outdated !');
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '621534038789-696djitg2d2jiqjgaih1637sa8mnn8ls.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SIGN UP WITH SOCIAL PLATFORMS</Text>

      <TouchableOpacity
        onPress={loginWithGoogle}
        style={{
          padding: 20,
          backgroundColor: 'purple',
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
