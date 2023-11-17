import {StyleSheet} from 'react-native';

import {Theme} from '../../../constants/theming/themeProvider';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    headerContainer: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 5,
    },
    innerHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerLogo: {
      width: 55,
      height: 40,
      borderRadius: 15,
    },
    headerText: {
      fontFamily: 'KanitExtra-Bold',
      color: theme.colors.TEXT,
      fontSize: 37,
      // fontWeight: 'bold',
      marginLeft: 3,
      textAlign: 'center',
      // marginBottom: 5,
    },
    SearchBarStyle: {
      fontSize: 20,
      fontWeight: '400',
      paddingVertical: 6,
    },

    iconContainer: {
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 10,
      width: 60,
    },
  });
