import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import ScreenNames from '../screenNames';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
}
