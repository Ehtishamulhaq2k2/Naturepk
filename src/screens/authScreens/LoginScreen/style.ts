import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#D7E5FF',
    // backgroundColor: 'red',
  },
  topContainer: {
    width: SCREEN_WIDTH,
    height: 300,
    // alignSelf: 'center',
    // flex: 1,
  },
  welcomeText: {
    position: 'absolute',
    color: 'white',
    fontSize: 46,
    fontWeight: '900',
    top: 100,
    width: 170,
    textAlign: 'left',
    left: 40,
  },
  blueElipse: {
    opacity: 0.85,
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexShrink: 0,
  },
  topElipse: {
    position: 'absolute',
  },
  rightElipse: {
    position: 'relative',
    left: 250,
    // bottom: 100,
  },
  /*--------------------------------------------------------------- */

  loginScreenContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  loginFormView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFormTextInput: {
    color: '#000',
    height: 60,
    width: 300,
    fontSize: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    backgroundColor: '#FAFAFA',
    padding: 20,
    marginTop: 5,
    marginBottom: 10,
  },

  signinButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: 300,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  signinText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 30,
  },
  signupButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: 280,
  },
  signupText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 15,
    backgroundColor: '#0B7EE885',
    padding: 10,
    borderRadius: 10,
  },
  forgotPasswrodText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 15,
    backgroundColor: '#FF000085',
    padding: 10,
    borderRadius: 10,
  },
});
export default styles;
