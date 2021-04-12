import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFocusEffect } from '@react-navigation/core';

import { themeContextDefault ,ThemeContext } from './context/theme'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState(themeContextDefault)

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <Navigation theme={theme} />
          <StatusBar />
        </ThemeContext.Provider>
      </SafeAreaProvider>
    );
  }
}
