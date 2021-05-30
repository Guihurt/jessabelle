import { useTheme } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/theme";
import { GridStyle } from "../constants/Styles";
import Card from "../components/Card";
import dayjs from "dayjs";
import useWindowScale from "../hooks/useWindowScale";

export default function YearScreen({ navigation }) {
  const windowScale = useWindowScale()
  const [theme, setTheme] = useContext(ThemeContext);
  //const { } = useTheme();
  console.log("Theme:", theme);

  type CellProps = {
    month: String
  }

  const MonthCell = ({month}: CellProps) => {
    return (
      <TouchableOpacity
        style={GridStyle.cell}
        onPress={() => navigation.navigate("Month", { month: `${month}` })}
      >
        <Text style={GridStyle.cellText}>{month}</Text>
      </TouchableOpacity>
    );
  };

  const MonthCard = () => {
    return (
      <Card cardContainerStyle={{width: "100%", flexWrap: 'wrap', flexDirection: 'row'}}>
        {dayjs.months().map((month: String) => <MonthCell key={month} month={month}/>)}
      </Card>
    )
  }

  return (
    <View
      style={{
        alignItems: "center",
        padding: 10,
        flex: 1,
      }}
    >
      <MonthCard/>
    </View>
  );
}