import React from 'react'

import YearScreen from './YearScreen'
import MonthScreen from './MonthScreen'
import DayScreen from './DayScreen'

import { createStackNavigator } from '@react-navigation/stack'

export default function MainScreen() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Year"
      screenOptions={{headerStatusBarHeight: 0}}
    >
      <Stack.Screen
        name="Year"
        component={YearScreen}
      />
      <Stack.Screen
        name="Month"
        component={MonthScreen}
      />
      <Stack.Screen
        name="Day"
        component={DayScreen}
      />
    </Stack.Navigator>
  )
}