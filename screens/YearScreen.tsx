import { useTheme } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/theme";
import { GridStyle } from "../constants/Styles";
import Card from "../components/Card";
import dayjs from "dayjs";
import useWindowScale from "../hooks/useWindowScale";

export default function YearScreen({ navigation }) {
  const [theme, setTheme] = useContext(ThemeContext);
  //const { } = useTheme();
  console.log("Theme:", theme);

  type CellProps = {
    month: String | React.Key;
    index: number;
  };

  const MonthCell = ({ month, index }: CellProps) => {
    const isToday = dayjs().month() === index;
    return (
      <TouchableOpacity
        style={[
          GridStyle.cell,
          { backgroundColor: isToday ? theme.colors.card : null },
        ]}
        onPress={() => navigation.navigate("Month", { month: `${month}` })}
      >
        <Text style={[GridStyle.cellText,{color: isToday ? 'white' : 'black'}]}>{month}</Text>
      </TouchableOpacity>
    );
  };

  const MonthCard = () => {
    return (
      <Card cardContainerStyle={{ width: "100%", flexWrap: "wrap", flexDirection: "row" }}>
        {dayjs.months().map((month, index) => (
          <MonthCell key={month} month={month} index={index + 1} />
        ))}
      </Card>
    );
  };

  return (
    <View
      style={{
        alignItems: "center",
        padding: 10,
        flex: 1,
      }}
    >
      <MonthCard />
    </View>
  );
}
