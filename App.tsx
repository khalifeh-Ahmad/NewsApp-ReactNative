/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import { useSavedArticlesStore } from './src/store/useSavedArticlesStore';
import { useThemeStore } from './src/theme';

function App() {
  // Initialize stores on app startup
  const initializeSavedArticles = useSavedArticlesStore(state => state.initializeStore);
  const initializeTheme = useThemeStore(state => state.initializeTheme);
  const isDark = useThemeStore(state => state.isDark);
  const colors = useThemeStore(state => state.colors);

  useEffect(() => {
    initializeSavedArticles();
    initializeTheme();
  }, [initializeSavedArticles, initializeTheme]);

  // Custom navigation themes that use our color palette
  const navigationTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      primary: colors.primary,
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
      notification: colors.primary,
    },
  };

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <NavigationContainer theme={navigationTheme}>
        <MainStack />
      </NavigationContainer>
    </>
  );
}

export default App;
