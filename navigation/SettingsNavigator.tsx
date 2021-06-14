import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SettingScreen from '../screens/SettingScreen'
import ThemeScreen from '../screens/ThemeScreen'

export default function SettingsNavigator() {
  const SettingStack = createStackNavigator()
  return (
    <SettingStack.Navigator
      initialRouteName="SettingOptions"
      screenOptions={{ headerShown: false }}
    >
      <SettingStack.Screen
        name="SettingOptions"
        component={SettingScreen}
      />
      <SettingStack.Screen
        name="Theme"
        component={ThemeScreen}
        options={{ headerShown: true }}
      />
    </SettingStack.Navigator>
  )
}