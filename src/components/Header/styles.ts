import { StyleSheet, Platform } from 'react-native';
import { ThemeColors } from '../../theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: colors.card,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
        },
        android: {
          elevation: 3,
        },
      }),
      borderBottomWidth: 0.5,
      borderBottomColor: colors.border,
    },
    img: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: colors.surface,
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: colors.text,
      letterSpacing: -0.4,
      fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-medium',
    },
  });