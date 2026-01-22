import { StyleSheet } from 'react-native';
import { fonts } from '../../utils/helpers/constants';

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {},
  header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backBtn: {
    backgroundColor: 'gold',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
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
});

export default styles;
