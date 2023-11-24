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

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      setLoginError(null); // Clear the loginError when the user starts typing
    }
  };
  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
    if (loginError) {
      setLoginError(null); // Clear the loginError when the user starts typing
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
