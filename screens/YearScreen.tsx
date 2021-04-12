import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function YearScreen({ navigation }) {

  //const { } = useTheme();
  //console.log("Theme: ",light)

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text style={{color: 'black'}}>Year Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Month")}
        style={{ backgroundColor: '#374337', padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: 'white' }}>Go to Month Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}