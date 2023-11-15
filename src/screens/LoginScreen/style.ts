import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  loginScreenContainer: {
    flex: 1,
  },
  loginText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
    color: 'grey',
  },
  SignUpText: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 30,
    color: 'grey',
    textAlign: 'center',
  },
  SignUpButton: {
    color: '#3897F1',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    color: 'grey',
    height: 43,
    fontSize: 17,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    backgroundColor: '#FAFAFA',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#3897F1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center',
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});
export default styles;
