import { createStackNavigator } from '@react-navigation/stack';
import ScreenNames from '../screenNames';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ArticleDetails from '../../screens/ArticleDetails/ArticleDetails';

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen
        name={ScreenNames.ArticleDetails}
        component={ArticleDetails}
      />
    </Stack.Navigator>
  );
}
