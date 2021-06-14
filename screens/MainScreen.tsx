import React from "react";

import YearScreen from "./YearScreen";
import MonthScreen from "./MonthScreen";
import DayScreen from "./DayScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import dayjs from "dayjs";

export default function MainScreen() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const CurrentYear = dayjs().year().toString();

  return (
    <Stack.Navigator initialRouteName="Year">
      <Stack.Screen name="Year" component={YearScreen} options={{ title: CurrentYear }} />
      <Stack.Screen
        name="Month"
        component={MonthScreen}
        options={({ route }) => ({ title: route.params.month })}
      />
      <Stack.Screen name="Day" component={DayScreen} options={({route}) => ({title: route.params.day})}/>
    </Stack.Navigator>
  );
}
