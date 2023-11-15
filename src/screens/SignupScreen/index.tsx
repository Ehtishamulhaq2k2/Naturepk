import React, {useState, useContext} from 'react';
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
import {AuthContext} from '../../navigation/AuthProvider';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authContext = useContext(AuthContext);

  if (!authContext) {
    // Handle the case where AuthContext is not defined
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const {register} = authContext;

  return (
    <SafeAreaView style={styles.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.SignUpFormView}>
            <Text style={styles.SignUpText}>Sign up</Text>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="#C4C3CB"
              style={styles.SignUPFormTextInput}
              value={email}
              onChangeText={userEmail => setEmail(userEmail)}
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Create Password"
              placeholderTextColor="#C4C3CB"
              style={styles.SignUPFormTextInput}
              secureTextEntry={true}
              value={password}
              onChangeText={userPassword => setPassword(userPassword)}
            />
            <Button
              buttonStyle={styles.SignUpButton}
              onPress={() => register({email, password})}
              title="Sign up"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUpScreen;
