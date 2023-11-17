import {View, Text, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import {Button} from 'react-native-elements';
import {AuthContext} from '../../../navigation/AuthProvider';
import {styles} from './style';

const SettingScreen = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    // Handle the case where AuthContext is not defined
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const {logout} = authContext;
  return (
    <SafeAreaView style={styles.containerView}>
      <View>
        <Button title="Logout" onPress={() => logout()} />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
