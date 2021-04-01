import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MonthScreen({ navigation }) {

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>Month Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Day")}
        style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: 'white' }}>Go to Day Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}