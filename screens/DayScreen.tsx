import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DayScreen({ navigation }) {

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>Day Screen</Text>
    </SafeAreaView>
  )
}