import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RowProps } from "../types";
import { GridStyle } from "../constants/Styles";
import Card from "../components/Card";
import dayjs from "dayjs";

export default function MonthScreen({ navigation, route }) {
  const currentMonth = route.params.month;

  type DayCellProps = {
    day: String | React.Key;
    number: Number;
  };

  useFocusEffect(React.useCallback(() => {}, []));

  const DayCell = ({ day, number }: DayCellProps) => {
    return (
      <TouchableOpacity
        style={[GridStyle.cell, { minHeight: 40, minWidth: 40 }]}
        onPress={() => navigation.navigate("Day", { day: `${day}` })}
      >
        <Text style={GridStyle.cellText}>{number}</Text>
      </TouchableOpacity>
    );
  };

  type WeekRowProps = {
    offset: number;
  };

  const WeekRow = ({ offset }: WeekRowProps) => {
    return (
      <View style={{ flexDirection: "row" }}>
        {dayjs.weekdays().map((weekday, index) => (
          <DayCell key={weekday} day={weekday} number={offset * 7 + index + 1} />
        ))}
      </View>
    );
  };

  const DayCard = () => {
    return (
      <Card cardContainerStyle={{ width: "100%", flexWrap: "wrap" }}>
        <WeekRow offset={0} />
        <WeekRow offset={1} />
        <WeekRow offset={2} />
        <WeekRow offset={3} />
        <WeekRow offset={4} />
      </Card>
    );
  };

  return (
    <View style={{ alignItems: "center", padding: 10 }}>
      <DayCard />
    </View>
  );
}
