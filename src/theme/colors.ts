/**
 * Theme Colors Definition
 * 
 * This file defines all colors used throughout the app for both light and dark modes.
 * Having a centralized color system ensures consistency and makes theme switching easy.
 */

export type ThemeColors = {
  // Backgrounds
  background: string;
  surface: string;
  card: string;
  
  // Text
  text: string;
  textSecondary: string;
  textMuted: string;
  
  // Primary accent
  primary: string;
  primaryLight: string;
  
  // Status colors
  danger: string;
  dangerLight: string;
  success: string;
  
  // Borders & Dividers
  border: string;
  divider: string;
  
  // Tab bar
  tabBar: string;
  tabBarBorder: string;
  tabActive: string;
  tabInactive: string;
  
  // Input fields
  inputBackground: string;
  inputBorder: string;
  placeholder: string;
  
  // Overlay
  overlay: string;
};

/**
 * Light Theme Colors
 */
export const lightColors: ThemeColors = {
  // Backgrounds
  background: '#ffffff',
  surface: '#f8f9fa',
  card: '#ffffff',
  
  // Text
  text: '#1a1a1a',
  textSecondary: '#333333',
  textMuted: '#8e8e93',
  
  // Primary accent (blue)
  primary: '#2f95dc',
  primaryLight: '#e3f2fd',
  
  // Status colors
  danger: '#ff3b30',
  dangerLight: '#ffe0e0',
  success: '#34c759',
  
  // Borders & Dividers
  border: '#e0e0e0',
  divider: '#f0f0f0',
  
  // Tab bar
  tabBar: '#ffffff',
  tabBarBorder: '#e0e0e0',
  tabActive: '#2f95dc',
  tabInactive: '#8e8e93',
  
  // Input fields
  inputBackground: '#f5f5f5',
  inputBorder: '#e0e0e0',
  placeholder: '#999999',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
};

/**
 * Dark Theme Colors
 */
export const darkColors: ThemeColors = {
  // Backgrounds
  background: '#121212',
  surface: '#1e1e1e',
  card: '#2c2c2c',
  
  // Text
  text: '#ffffff',
  textSecondary: '#e0e0e0',
  textMuted: '#9e9e9e',
  
  // Primary accent (blue - slightly brighter for dark mode)
  primary: '#4da6ff',
  primaryLight: '#1a3a5c',
  
  // Status colors
  danger: '#ff6b6b',
  dangerLight: '#4a2020',
  success: '#4cd964',
  
  // Borders & Dividers
  border: '#3d3d3d',
  divider: '#2c2c2c',
  
  // Tab bar
  tabBar: '#1e1e1e',
  tabBarBorder: '#3d3d3d',
  tabActive: '#4da6ff',
  tabInactive: '#9e9e9e',
  
  // Input fields
  inputBackground: '#2c2c2c',
  inputBorder: '#3d3d3d',
  placeholder: '#666666',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.7)',
};

/**
 * Get colors based on theme mode
 */
export const getColors = (isDark: boolean): ThemeColors => {
  return isDark ? darkColors : lightColors;
};
