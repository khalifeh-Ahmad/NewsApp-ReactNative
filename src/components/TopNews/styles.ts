// styles.js
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a', // dark gray instead of red
    marginBottom: 12,
    letterSpacing: -0.3,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-medium',
  },
  listCont: {
    marginTop: 8,
  },
  cardCont: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden', // ensures image respects border radius
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
    // No need for separate left radii — overflow: hidden handles it
  },
  cardArticleName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
    paddingVertical: 12,
    paddingHorizontal: 12,
    lineHeight: 20,
    // Optional: clamp to 2-3 lines
    numberOfLines: 3,
    ellipsizeMode: 'tail',
  },
});

export default styles;