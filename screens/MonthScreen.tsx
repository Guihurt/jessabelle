import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RowProps } from "../types";

export default function MonthScreen({ navigation, route }) {

  function GenerateRow({ position }: RowProps) {
    return <Text>{position}</Text>;
  }

  return (
    <View style={{ alignItems: "center" }}>
      <View>{GenerateRow({ position: 3 })}</View>
    </View>
  );
}
