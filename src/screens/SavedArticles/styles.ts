import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#8e8e93',
    marginBottom: 20,
  },
  emptyListContainer: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#8e8e93',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyHint: {
    fontSize: 13,
    color: '#2f95dc',
    textAlign: 'center',
  },
});
