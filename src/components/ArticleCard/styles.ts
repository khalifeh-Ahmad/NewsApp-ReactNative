import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    cardCont: {
      flexDirection: 'row',
      gap: 10,
      borderWidth: 1,
      borderColor: colors.border,
      paddingEnd: 10,
      borderRadius: 20,
      marginBottom: 10,
      backgroundColor: colors.card,
    },
    cardContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingVertical: 10,
    },
    cardArticleName: {
      textAlign: 'left',
      flex: 1,
      fontSize: 14,
      color: colors.text,
    },
    cardArticelImage: {
      width: 100,
      height: 100,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    saveButton: {
      padding: 4,
      marginLeft: 8,
    },
    readTime: {
      fontSize: 12,
      color: colors.textMuted,
      marginTop: 4,
      
    },
  });