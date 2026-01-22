// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   img: {
//     width: 50,
//     height: 50,
//     borderRadius:40
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'green',
//   },
// });

// export default styles;






import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  img: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f5f5f5', // fallback if image fails
  },
  title: {
    fontSize: 22,
    fontWeight: '700', // semibold
    color: '#1a1a1a',
    letterSpacing: -0.4,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-medium',
  },
});

export default styles;