import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme';

export const createStyles = (colors: ThemeColors, isDark: boolean) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 20,
      borderRadius: 20,
      overflow: 'hidden',
      width: 300,
      height: 300,
    },
    whiteSec: {
      backgroundColor: isDark ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.85)',
      padding: 10,
      marginTop: 100,
      marginBottom: 20,
      marginHorizontal: 20,
      borderRadius: 10,
    },
    redSec: {
      backgroundColor: colors.primary,
      alignSelf: 'flex-start',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 4,
    },
    headTxt: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 12,
    },
    secTxt: {
      color: colors.text,
      marginTop: 10,
    },
    listContainer: {
      marginTop: 20,
    },
  });
