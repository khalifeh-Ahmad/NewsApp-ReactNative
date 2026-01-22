import { createStackNavigator } from '@react-navigation/stack';
import ScreenNames from '../ScreenNames';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
}
