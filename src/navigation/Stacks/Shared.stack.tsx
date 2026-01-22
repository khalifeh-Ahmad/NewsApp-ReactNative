import { createStackNavigator } from '@react-navigation/stack';
import ScreenNames from '../ScreenNames';
import ArticleDetails from '../../screens/ArticleDetails/ArticleDetails';

const Stack = createStackNavigator();

export default function SharedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ScreenNames.ArticleDetails}
        component={ArticleDetails}
      />
    </Stack.Navigator>
  );
}
