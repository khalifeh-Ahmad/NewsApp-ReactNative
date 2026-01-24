/**
 * Theme Module - Central Export
 * 
 * Usage in components:
 * 
 * import { useTheme } from '../theme';
 * 
 * function MyComponent() {
 *   const { colors, isDark } = useTheme();
 *   return <View style={{ backgroundColor: colors.background }} />;
 * }
 */

export { useThemeStore, type ThemeMode } from './useThemeStore';
export { lightColors, darkColors, getColors, type ThemeColors } from './colors';

// Re-export a convenient hook
import { useThemeStore } from './useThemeStore';

/**
 * useTheme Hook
 * 
 * A convenient hook that returns the current theme colors and state.
 * This is the primary way components should access theme values.
 * 
 * @example
 * const { colors, isDark, themeMode, setThemeMode } = useTheme();
 */
export const useTheme = () => {
  const colors = useThemeStore(state => state.colors);
  const isDark = useThemeStore(state => state.isDark);
  const themeMode = useThemeStore(state => state.themeMode);
  const setThemeMode = useThemeStore(state => state.setThemeMode);
  
  return {
    colors,
    isDark,
    themeMode,
    setThemeMode,
  };
};
