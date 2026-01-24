import { StyleSheet } from 'react-native';
import { fonts } from '../../utils/helpers/constants';
import { ThemeColors } from '../../theme';

/**
 * Dynamic styles that adapt to theme colors
 */
export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 40,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 40,
    },
    title: {
      fontSize: 28,
      fontFamily: fonts.CairoBold,
      color: colors.text,
      marginLeft: 12,
    },
    section: {
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: fonts.CairoBold,
      color: colors.textMuted,
      marginBottom: 16,
      marginLeft: 8,
    },
    // Theme toggle styles
    themeContainer: {
      flexDirection: 'row',
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 4,
    },
    themeOption: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRadius: 12,
    },
    themeOptionSelected: {
      backgroundColor: colors.card,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    themeOptionText: {
      fontSize: 13,
      fontFamily: fonts.CairoBold,
      color: colors.textMuted,
      marginTop: 6,
    },
    themeOptionTextSelected: {
      color: colors.primary,
    },
    checkIcon: {
      position: 'absolute',
      top: 4,
      right: 4,
    },
    // Logout button styles
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: colors.card,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.dangerLight,
      shadowColor: colors.danger,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    logoutText: {
      fontSize: 17,
      fontFamily: fonts.CairoBold,
      color: colors.danger,
      marginLeft: 12,
    },
  });
