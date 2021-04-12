import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { SafeAreaView, View, Text, SectionList, TouchableOpacity } from 'react-native'
import Styles from '../constants/Styles'
import { ThemeContext } from '../context/theme'

export default function SettingScreen({ navigation }) {

  const [theme, setTheme] = useContext(ThemeContext)

  const DATA = [
    {
      title: "Visual",
      data: [{ title: "Theme", icon: faSwatchbook, description: "Change Jessabelle's look to fit your vibe" }]
    },
  ]

  function renderSectionHeader(title: String) {
    return (
      <Text style={[Styles.title, {}]}>{title}</Text>
    )
  }

  function renderItems(item) {
    return (
      <TouchableOpacity
        style={[Styles.itemContainer, { backgroundColor: theme.colors.background_item }]}
        onPress={() => navigation.navigate("Theme")}
      >
        <View style={Styles.itemHeader_Icon}>
          <FontAwesomeIcon icon={item.icon} color={theme.colors.primary} size={20} />
          <Text style={[Styles.h2, { color: theme.colors.text }]}>{item.title}</Text>
        </View>
        <Text style={[Styles.h3, { color: theme.colors.text }]}>{item.description}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={[Styles.viewContainer, { paddingTop: 15 }]}>
      <SectionList
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => renderItems(item)}
        renderSectionHeader={({ section: { title } }) => renderSectionHeader(title)}
        sections={DATA}
      />
    </SafeAreaView>
  )
}