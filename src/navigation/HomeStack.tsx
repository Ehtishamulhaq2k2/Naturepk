import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/mainScreens/HomeScreen';
import SearchScreen from '../screens/mainScreens/SearchScreen';
import VideoScreen from '../screens/mainScreens/VideoScreen';
import SettingScreen from '../screens/mainScreens/SettingScreen';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, orientation: 'portrait'}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="PlayVideo" component={VideoScreen} />
    </Stack.Navigator>
  );
}
