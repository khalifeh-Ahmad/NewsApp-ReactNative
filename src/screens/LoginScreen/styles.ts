import { StyleSheet } from 'react-native';
import { fonts } from '../../utils/helpers/constants';
import { ThemeColors } from '../../theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    innerContainer: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 80,
      paddingBottom: 40,
    },
    header: {
      alignItems: 'center',
      marginBottom: 40,
    },
    title: {
      fontFamily: fonts.CairoBold,
      fontSize: 32,
      color: colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontFamily: fonts.Cairo,
      fontSize: 16,
      color: colors.textMuted,
      textAlign: 'center',
      lineHeight: 22,
    },
    formCont: {
      marginBottom: 30,
    },
    inputGroup: {
      marginBottom: 20,
    },
    label: {
      fontFamily: fonts.CairoBold,
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 8,
      marginLeft: 4,
    },
    input: {
      height: 52,
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: 14,
      paddingHorizontal: 16,
      fontSize: 16,
      fontFamily: fonts.Cairo,
      backgroundColor: colors.inputBackground,
      color: colors.text,
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      marginTop: 8,
    },
    forgotText: {
      fontFamily: fonts.Cairo,
      fontSize: 14,
      color: colors.primary,
    },
    submitBtn: {
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      borderRadius: 14,
      marginBottom: 24,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 3,
    },
    submitText: {
      fontFamily: fonts.CairoBold,
      fontSize: 18,
      color: '#ffffff',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerText: {
      fontFamily: fonts.Cairo,
      fontSize: 15,
      color: colors.textMuted,
    },
    linkText: {
      fontFamily: fonts.CairoBold,
      fontSize: 15,
      color: colors.primary,
    },
  });