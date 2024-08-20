import React, {useContext, useState} from 'react';
import styles from './style';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../../navigation/AuthProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import auth from '@react-native-firebase/auth';
import {GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  GoogleSignin.configure({
    webClientId: '462242916932-cr3oe8m8kq8pfq8ne1dbohkmp1fjqjlq.apps.googleusercontent.com', 
    offlineAccess: true, 
    forceCodeForRefreshToken: true, 
  });

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (e : any) {
      console.error('Google Sign-In Error: ', e.message);
      if (e.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (e.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (e.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }


  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  if (!authContext) {
    // Handle the case where AuthContext is not defined
    return <Text>loginError: AuthContext is not defined</Text>;
  }

  const {login, loginError, setLoginError} = authContext;
  console.log('loginError on log ', loginError);

  const handleInputChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
    if (loginError) {
      setLoginError(null); 
    }
  };
  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
    if (loginError) {
      setLoginError(null); 
    }
  };
  const handleLogin = () => {
    if (!emailRegex.test(email)) {
      setLoginError('Please enter a valid email address');
      return;
    }

    login({email, password});
    console.log('clicked');
  };
  return (
    <SafeAreaView style={styles.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.topContainer}>
            <Image
              source={require('../../../assets/rightCircle.png')}
              style={styles.rightElipse}
            />
            <Image
              source={require('../../../assets/blueCircle.png')}
              style={styles.blueElipse}
            />
            <Image
              source={require('../../../assets/topCircle.png')}
              style={styles.topElipse}
            />
            <Text style={styles.welcomeText}>Welcome Back</Text>
          </View>
          <View style={styles.loginFormView}>
            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={handleInputChange}
              keyboardType="email-address"
              autoCorrect={false}
              placeholderTextColor="#000"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#000"
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
              style={styles.loginFormTextInput}
            />
            {loginError && (
              <Text style={{color: 'red', textAlign: 'left'}}>
                {loginError}
              </Text>
            )}
            <View style={styles.signinButtonContainer}>
              <Text style={styles.signinText}>Sign in</Text>
              <FontAwesome5
                name="arrow-circle-right"
                size={40}
                color="#367CFE"
                onPress={handleLogin}
                disabled={!email || !password}
              />
            </View>
            <View>
              <FontAwesome5
                name="google"
                size={40}
                color="#367CFE"
                onPress={onGoogleButtonPress}
              />
            </View>
            <View style={styles.signupButtonContainer}>
              <Text
                style={styles.signupText}
                onPress={() => navigation.navigate('Signup' as never)}>
                Sign up
              </Text>
              <Text
                style={styles.forgotPasswrodText}
                onPress={() => navigation.navigate('ForgotPassword' as never)}>
                Forgot Password
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
