import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    width: 300,
    height: 300,
  },
  whiteSec: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
    marginTop: 100,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    // position: 'absolute',
  },
  redSec: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  secTxt: {
    color: 'black',
    marginTop: 10,
    numberOfLines: 2,
  },
  listContainer: {
    marginTop: 20,
  },
});

export default styles;
