// styles.js
import { StyleSheet } from 'react-native';
import { fonts } from '../../utils/helpers/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: fonts.CairoBold,
    fontSize: 32,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: fonts.Cairo,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  formCont: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: fonts.CairoBold,
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: fonts.Cairo,
    backgroundColor: '#fafafa',
    color: '#1a1a1a',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotText: {
    fontFamily: fonts.Cairo,
    fontSize: 14,
    color: '#2f95dc',
  },
  submitBtn: {
    backgroundColor: '#2f95dc', // professional blue
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 24,
    shadowColor: '#2f95dc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  submitText: {
    fontFamily: fonts.CairoBold,
    fontSize: 18,
    color: '#ffffff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: fonts.Cairo,
    fontSize: 15,
    color: '#666',
  },
  linkText: {
    fontFamily: fonts.CairoBold,
    fontSize: 15,
    color: '#2f95dc',
  },
});

export default styles;