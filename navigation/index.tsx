import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useContext } from 'react';
import { ColorSchemeName } from 'react-native';

import {DarkTheme, DefaultTheme} from '../constants/Colors'
import { ThemeContext } from '../context/theme';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import DrawerNavigator from './DrawerNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ theme }) {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={DrawerNavigator}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
