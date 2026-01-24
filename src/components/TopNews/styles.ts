import { StyleSheet, Platform } from 'react-native';
import { ThemeColors } from '../../theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginTop: 20,
      paddingBottom: 20,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 12,
      letterSpacing: -0.3,
      fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-medium',
    },
    listCont: {
      marginTop: 8,
    },
    cardCont: {
      flexDirection: 'row',
      backgroundColor: colors.card,
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 14,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.06,
          shadowRadius: 6,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    cardArticleImg: {
      width: 100,
      height: 100,
    },
    cardArticleName: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      color: colors.text,
      paddingVertical: 12,
      paddingHorizontal: 12,
      lineHeight: 20,
    },
  });