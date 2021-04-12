import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from '../screens/MainScreen'
import SettingsNavigator from './SettingsNavigator';

export default function DrawerNavigator() {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Journal"
      screenOptions={{headerShown: true}}
    >
      <Drawer.Screen
        name="Journal"
        component={MainScreen}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingsNavigator}
        options={{title: 'Settings'}}
      />
    </Drawer.Navigator>
  )
}