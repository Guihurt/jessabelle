import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from '../screens/MainScreen'

export default function DrawerNavigator() {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Journal"
    >
      <Drawer.Screen
        name="Journal"
        component={MainScreen}
      />
      {/* <Drawer.Screen
        name="Setting"
        component={ }
      /> */}
    </Drawer.Navigator>
  )
}