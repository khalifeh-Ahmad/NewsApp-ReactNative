import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginVertical: 20,
    paddingVertical: 50,
    alignContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  btn: {
    backgroundColor: 'gold',
    padding: 10,
    marginVertical: 11,
    borderRadius: 10,
  },
  btnText: {},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },  
  loader: {
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
  },
});

export default styles;
