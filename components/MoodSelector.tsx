import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMeh,
  faSmile,
  faGrinBeam,
  faFrown,
  faSadTear,
} from "@fortawesome/free-regular-svg-icons";

type MoodSelectorProps = {
  iconSize: number;
  setMood: Function;
  selectedMood: number;
};

export const Mood = {
  LOW: -2,
  MID_LOW: -1,
  MEDIUM: 0,
  MID_HIGH: 1,
  HIGH: 2,
} as const;

export default function MoodSelector({
  iconSize,
  setMood,
  selectedMood,
}: MoodSelectorProps) {
  const selectedStyle = (selectedMood: number, Mood: number) => {
    return selectedMood === Mood ? styles.selectedButton : {};
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.moodButton, selectedStyle(selectedMood, Mood.LOW)]}
        onPress={() => setMood(Mood.LOW)}
      >
        <FontAwesomeIcon icon={faSadTear} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.moodButton, selectedStyle(selectedMood, Mood.MID_LOW)]}
        onPress={() => setMood(Mood.MID_LOW)}
      >
        <FontAwesomeIcon icon={faFrown} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.moodButton, selectedStyle(selectedMood, Mood.MEDIUM)]}
        onPress={() => setMood(Mood.MEDIUM)}
      >
        <FontAwesomeIcon icon={faMeh} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.moodButton, selectedStyle(selectedMood, Mood.MID_HIGH)]}
        onPress={() => setMood(Mood.MID_HIGH)}
      >
        <FontAwesomeIcon icon={faSmile} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.moodButton, selectedStyle(selectedMood, Mood.HIGH)]}
        onPress={() => setMood(Mood.HIGH)}
      >
        <FontAwesomeIcon icon={faGrinBeam} size={iconSize} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    padding: 5,
    marginVertical: 5,
    borderRadius: 15,
  },
  moodButton: {
    paddingVertical: 2.5,
    paddingHorizontal: 2.5,
    flex: 1,
    alignItems: "center",
    borderRadius: 15,
  },
  selectedButton: {
    backgroundColor: "purple",
  },
});
