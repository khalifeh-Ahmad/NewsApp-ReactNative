import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardCont: {
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingEnd: 10,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
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
    color: '#333',
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
});