import {View, Text, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

// import useTheme from '../../constants/theming/themeProvider';
import useThemedStyles from '../../constants/theming/useThemedStyles';
import {styles} from './style';

const HomeScreen = () => {
  const navigation = useNavigation();

  const style = useThemedStyles(styles);
  // const theme = useTheme();
  return (
    <View>
      <View style={style.headerContainer}>
        <View style={style.innerHeaderContainer}>
          <Image
            style={style.headerLogo}
            source={require('../../../src/assets/naturePkLogo.png')}
          />
          <Text style={style.headerText}>NaturePk</Text>
        </View>
        <View style={style.iconContainer}>
          <FontAwesome
            name="search"
            size={25}
            color="black"
            onPress={() => navigation.navigate('Search' as never)}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
