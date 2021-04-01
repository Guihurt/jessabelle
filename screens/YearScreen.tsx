import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function YearScreen({ navigation }) {

  console.log("YearScreen")

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>Year Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Month")}
        style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: 'white' }}>Go to Month Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}