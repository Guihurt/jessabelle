import React from "react";

import YearScreen from "./YearScreen";
import MonthScreen from "./MonthScreen";
import DayScreen from "./DayScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import dayjs from "dayjs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBook, faPlus, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function MainScreen({ navigation }) {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const CurrentYear = dayjs().year().toString();
  const CurrentDay = dayjs().day();
  let today;
  const months = dayjs.weekdays().map((value, index) => {
    if (index === CurrentDay) {
      today = value;
    }
  });

  return (
    <Stack.Navigator initialRouteName="Year">
      <Stack.Screen
        name="Year"
        component={YearScreen}
        options={{
          title: CurrentYear,
          headerRight: (props) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Day", { day: today });
              }}
              style={{ paddingRight: 15, flexDirection: "row" }}
            >
              <FontAwesomeIcon
                style={{ marginRight: 2.5 }}
                icon={faBook}
                size={20}
                color={"white"}
              />
              <FontAwesomeIcon icon={faPlus} size={20} color={"white"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Month"
        component={MonthScreen}
        options={({ route }) => ({ title: route.params.month })}
      />
      <Stack.Screen
        name="Day"
        component={DayScreen}
        options={({ route }) => ({ title: route.params.day })}
      />
    </Stack.Navigator>
  );
}
