import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDotCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useContext } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Styles from '../constants/Styles'
import { ThemeContext, themeContextDefault } from '../context/theme'
import { DefaultTheme, DarkTheme, DevTheme } from '../constants/Colors'

export default function ThemeScreen() {

  const [theme, setTheme] = useContext(ThemeContext)

  const themeStyle = StyleSheet.create({
    themeButtons: {
      backgroundColor: theme.colors.background_item,
      borderRadius: 15,
      padding: 15
    }
  })

  return (
    <ScrollView
      style={{ height: '20%' }}
      contentContainerStyle={[Styles.viewContainer, { flexGrow: 1 }]}
    >
      <Text style={Styles.h2}>Preview:</Text>
      <View style={{ marginVertical: 10, borderWidth: 2.5, borderColor: theme.colors.border }}>
        <Text style={{ color: theme.colors.text }}>Jessabelle</Text>
      </View>
      <Text style={Styles.h2}>Themes:</Text>
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <TouchableOpacity
          style={[Styles.itemHeader_Icon, themeStyle.themeButtons]}
          onPress={() => setTheme(DefaultTheme)}
        >
          <FontAwesomeIcon icon={theme === DefaultTheme ? faCircle : faDotCircle} size={18} />
          <Text>Default</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.itemHeader_Icon, themeStyle.themeButtons]}
          onPress={() => setTheme(DarkTheme)}
        >
          <FontAwesomeIcon icon={theme === DarkTheme ? faCircle : faDotCircle} size={18} />
          <Text>Dark Default</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.itemHeader_Icon, themeStyle.themeButtons]}
          onPress={() => setTheme(DevTheme)}
        >
          <FontAwesomeIcon icon={theme === DevTheme ? faCircle : faDotCircle} size={18} />
          <Text>Dev</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  )
}

