import { StyleSheet } from 'react-native';
import { fonts } from '../../utils/helpers/constants';

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#fff',
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
    backgroundColor: 'gold',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
  },
  saveOfflineBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  savedBtn: {
    backgroundColor: '#2f95dc',
  },
  saveOfflineText: {
    fontSize: 13,
    color: '#333',
    fontFamily: fonts.CairoBold,
  },
  savedText: {
    color: '#fff',
  },
  dataCont: {
    paddingHorizontal: 16,
  },
  goBackText: { color: '#333' },
  coverImg: {
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: fonts.CairoBold,
  },
  description: {
    fontFamily: fonts.CairoLigh,
  },
  addTofavBtn: {
    backgroundColor: 'gold',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToFavText: {
    color: '#000',
    fontFamily: fonts.CairoBold,
  },
  removeFavBtn: {
    backgroundColor: '#ccc',
  },
});

export default styles;
