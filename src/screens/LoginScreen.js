import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import logo from '../public/image/logo2.png';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  headerLogin: {
    textAlign: 'center',
    padding: 40,
    fontSize: 30,
  },
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 0,
    borderColor: 'red',
    borderBottomWidth: 1,
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 15,
    color: '#ffce9f',
  },
  textForgot: {
    textAlign: 'right',
    marginTop: 10,
  },
});
function LoginScreen() {
  const [user, setUser] = useState({});
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly', 'email'], // [Android] what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '482375987833-07l9554bnktk2h46ba997b0qujjld0bn.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setloggedIn(true);
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('loi 1', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('loi 2', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('loi 3', error);
      } else {
        console.log('loi 4', error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{uri: 'https://i.ibb.co/9tsGjDd/logo2.png'}}
          style={{width: 150, height: 65}}
        />
      </View>
      <View style={styles.formInput}>
        <Fontisto name="email" style={styles.icon} size={20} />
        <TextInput
          placeholder="abc@mail.com"
          autoFocus={true}
          placeholderTextColor="#ffce9f"
        />
      </View>
      <View style={styles.formInput}>
        <Fontisto name="locked" style={styles.icon} size={20} />
        <TextInput placeholder="Password" placeholderTextColor="#ffce9f" />
      </View>
      <TouchableOpacity>
        <Text
          style={styles.textForgot}
          onPress={() => navigation.navigate('Home')}>
          Forgot Password
        </Text>
      </TouchableOpacity>

      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      <View style={styles.buttonContainer}>
        {!loggedIn && <Text>You are currently logged out</Text>}
        {loggedIn && (
          <Button onPress={this.signOut} title="LogOut" color="red"></Button>
        )}
      </View>
    </View>
  );
}

LoginScreen.propTypes = {};

export default LoginScreen;
