import { StyleSheet } from 'react-native';
import { fonts } from '../../utils/helpers/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    color: '#1a1a1a',
    marginLeft: 12,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: fonts.CairoBold,
    color: '#666',
    marginBottom: 16,
    marginLeft: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ffe0e0',
    // Subtle hover-like effect
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  logoutText: {
    fontSize: 17,
    fontFamily: fonts.CairoBold,
    color: '#ff3b30', // standard "destructive" red
    marginLeft: 12,
  },
});
