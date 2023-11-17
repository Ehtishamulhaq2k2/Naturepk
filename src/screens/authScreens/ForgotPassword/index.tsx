import React, {useState, useContext} from 'react';
import styles from './styles';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import {AuthContext} from '../../../navigation/AuthProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const authContext = useContext(AuthContext);

  if (!authContext) {
    // Handle the case where AuthContext is not defined
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const {resetPassword} = authContext;

  const handleResetPassword = async () => {
    try {
      await resetPassword(email);
      // Handle successful password reset, maybe navigate to a success screen
      Alert.alert(
        'Success',
        'Password Reset Email successfully Sent, Reset Password and login again',
        [{text: 'OK', onPress: () => navigation.navigate('Login' as never)}],
      );
    } catch (err) {
      console.error(err);
      // Handle error internally without displaying it
    }
  };

  return (
    <SafeAreaView style={styles.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.signupScreenContainer}>
          <View style={styles.topContainer}>
            <Image
              source={require('../../../assets/circleTopBlue.png')}
              style={styles.circleTopBlue}
            />
            <Image
              source={require('../../../assets/circleBottom.png')}
              style={styles.circleBottom}
            />
            <Text style={styles.welcomeText}>Reset Password</Text>
          </View>
          <View style={styles.signupFormView}>
            <TextInput
              value={email}
              placeholder="Enter your Email"
              onChangeText={userEmail => setEmail(userEmail)}
              keyboardType="email-address"
              autoCorrect={false}
              placeholderTextColor="#000"
              style={styles.signupFormTextInput}
            />
            {/* {signupError && <Text style={{color: 'red'}}>{signupError}</Text>} */}
            <View style={styles.signinButtonContainer}>
              <Text style={styles.signupText}>Submit</Text>
              <FontAwesome5
                name="arrow-circle-right"
                size={40}
                color="#367CFE"
                onPress={handleResetPassword}
                disabled={!email}
              />
            </View>

            <View style={styles.signupButtonContainer}>
              <Text
                style={styles.signinText}
                onPress={() => navigation.navigate('Login' as never)}>
                Sign in
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUpScreen;
