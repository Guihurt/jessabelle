import React from "react";
import { View } from "react-native";
import { CardStyle } from "../constants/Styles";
import { CardProps } from "../types";

export default function Card({ cardContainerStyle, children }: CardProps) {
  return <View style={[CardStyle.CardContainer, cardContainerStyle]}>{children}</View>;
}
