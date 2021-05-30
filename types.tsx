import { ReactNode } from 'react';
import {ViewStyle} from 'react-native'

//Screens

//Navigators

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

//Components
export type RowProps = {
  position: Number
}

export type MoodSelectorProps = {
  iconSize: number;
  setMood: Function;
  selectedMood: number;
};

export type CardProps = {
  cardContainerStyle?: ViewStyle,
  children?: ReactNode 
}

