import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MoodSelector from "../components/MoodSelector";

import { DefaultStyle as styles } from "../constants/Styles";

export default function DayScreen() {
  const [mood, setMood] = useState(0);

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.formRow}>
        <Text style={[styles.h2, styles.formHeader]}>Mood:</Text>
        <View style={{ flex: 3 }}>
          <MoodSelector iconSize={24} selectedMood={mood} setMood={setMood} />
        </View>
      </View>
      <View style={styles.formRow}>
        <Text style={[styles.h2, styles.formHeader]}>Journal Entry:</Text>
        <TextInput
          style={{
            color: "white",
            borderColor: "#374337",
            borderWidth: 2,
            flex: 3,
            borderRadius: 15,
            padding: 5,
          }}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={[styles.h2, styles.formHeader]}>Goals:</Text>
      </View>
    </SafeAreaView>
  );
}
