import { StyleSheet } from 'react-native';
import { fonts } from '../../utils/helpers/constants';
import { ThemeColors } from '../../theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    safeContainer: {
      backgroundColor: colors.background,
      flex: 1,
    },
    container: {},
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    backBtn: {
      backgroundColor: colors.primary,
      alignSelf: 'flex-start',
      padding: 10,
      borderRadius: 10,
    },
    saveOfflineBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
      gap: 6,
    },
    savedBtn: {
      backgroundColor: colors.primary,
    },
    saveOfflineText: {
      fontSize: 13,
      color: colors.text,
      fontFamily: fonts.CairoBold,
    },
    savedText: {
      color: '#fff',
    },
    dataCont: {
      paddingHorizontal: 16,
    },
    goBackText: {
      color: colors.textSecondary,
    },
    coverImg: {
      height: 200,
      resizeMode: 'cover',
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
      fontFamily: fonts.CairoBold,
      color: colors.text,
    },
    description: {
      fontFamily: fonts.CairoLigh,
      color: colors.textSecondary,
      lineHeight: 24,
    },
    addTofavBtn: {
      backgroundColor: colors.primary,
      padding: 14,
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 16,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addToFavText: {
      color: '#fff',
      fontFamily: fonts.CairoBold,
      fontSize: 16,
    },
    removeFavBtn: {
      backgroundColor: colors.surface,
    },
    shareBtn: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      padding: 8,
      borderRadius: 20,
      alignSelf: 'center',
    },
    
  });
