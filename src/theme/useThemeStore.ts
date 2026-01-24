/**
 * Theme Store
 * 
 * Manages theme state with three modes:
 * - 'system': Follows device OS setting (default)
 * - 'light': Always light mode
 * - 'dark': Always dark mode
 * 
 * The preference is persisted to AsyncStorage so it survives app restarts.
 */

import { create } from 'zustand';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeColors, lightColors, darkColors } from './colors';

// Theme mode options
export type ThemeMode = 'system' | 'light' | 'dark';

// Storage key for persisting theme preference
const THEME_STORAGE_KEY = '@theme_mode';

type ThemeState = {
  // The user's preference: 'system', 'light', or 'dark'
  themeMode: ThemeMode;
  
  // The actual resolved theme (true = dark, false = light)
  isDark: boolean;
  
  // The current color palette
  colors: ThemeColors;
  
  // Loading state
  isInitialized: boolean;
  
  // Actions
  initializeTheme: () => Promise<void>;
  setThemeMode: (mode: ThemeMode) => Promise<void>;
  
  // Internal: updates isDark based on mode and system preference
  _updateResolvedTheme: () => void;
};

/**
 * Resolves the actual dark/light state based on mode
 */
const resolveIsDark = (mode: ThemeMode): boolean => {
  if (mode === 'system') {
    return Appearance.getColorScheme() === 'dark';
  }
  return mode === 'dark';
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  themeMode: 'system',
  isDark: Appearance.getColorScheme() === 'dark',
  colors: Appearance.getColorScheme() === 'dark' ? darkColors : lightColors,
  isInitialized: false,

  /**
   * Initialize theme from AsyncStorage
   * Call this on app startup
   */
  initializeTheme: async () => {
    try {
      const savedMode = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      const mode: ThemeMode = (savedMode as ThemeMode) || 'system';
      const isDark = resolveIsDark(mode);
      
      set({
        themeMode: mode,
        isDark,
        colors: isDark ? darkColors : lightColors,
        isInitialized: true,
      });
    } catch (error) {
      console.error('Error loading theme:', error);
      set({ isInitialized: true });
    }
  },

  /**
   * Set the theme mode and persist to storage
   */
  setThemeMode: async (mode: ThemeMode) => {
    const isDark = resolveIsDark(mode);
    
    // Update state immediately for responsive UI
    set({
      themeMode: mode,
      isDark,
      colors: isDark ? darkColors : lightColors,
    });

    // Persist to storage
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  },

  /**
   * Internal: Re-resolve theme when system appearance changes
   */
  _updateResolvedTheme: () => {
    const { themeMode } = get();
    const isDark = resolveIsDark(themeMode);
    
    set({
      isDark,
      colors: isDark ? darkColors : lightColors,
    });
  },
}));

/**
 * Subscribe to system appearance changes
 * This ensures the app updates when user changes device theme
 */
Appearance.addChangeListener(() => {
  const store = useThemeStore.getState();
  if (store.themeMode === 'system') {
    store._updateResolvedTheme();
  }
});
