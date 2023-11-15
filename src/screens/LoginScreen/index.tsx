import React, {useContext, useState} from 'react';
import styles from './style';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../navigation/AuthProvider';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  if (!authContext) {
    // Handle the case where AuthContext is not defined
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const {login} = authContext;

  return (
    <SafeAreaView style={styles.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.loginText}>Log In</Text>
            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={userEmail => setEmail(userEmail)}
              keyboardType="email-address"
              autoCorrect={false}
              placeholderTextColor="#C4C3CB"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#C4C3CB"
              onChangeText={userPassword => setPassword(userPassword)}
              value={password}
              secureTextEntry={true}
              style={styles.loginFormTextInput}
            />
            <Button
              buttonStyle={styles.loginButton}
              title="Login"
              onPress={() => login({email, password})}
            />
          </View>
          <Text style={styles.SignUpText}>
            Don't have an account?
            <Text
              style={styles.SignUpButton}
              onPress={() => navigation.navigate('Signup' as never)}>
              Sign Up
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
