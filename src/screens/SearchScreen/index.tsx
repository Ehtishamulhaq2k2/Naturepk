import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={style.searchBarContianer}>
      <AntDesign
        name="arrowleft"
        size={30}
        color={'black'}
        onPress={() => navigation.goBack()}
      />
      <TextInput
        style={style.searchBarstyle}
        placeholder="Search Nature PK"
        autoCorrect={false}
        placeholderTextColor={'gray'}
      />
    </View>
  );
};

export default SearchScreen;

const style = StyleSheet.create({
  searchBarstyle: {
    // alignSelf: 'center',
    borderRadius: 22,
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: 320,
    // borderWidth: 1,
    marginRight: 3,
    fontSize: 15,
    fontWeight: '400',
    paddingVertical: 6,
    backgroundColor: '#D3D3D3',
    color: 'black',
  },
  searchBarContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 8,
  },
});
