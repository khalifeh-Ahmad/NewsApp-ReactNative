import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenNames from '../ScreenNames';
import FavoriteArticles from '../../screens/FavArticles/FavoriteArticles';
import SavedArticles from '../../screens/SavedArticles/SavedArticles';
import StackNames from '../StackNames';
import HomeStack from '../Stacks/Home.stack';
import { useTheme } from '../../theme';

const MyTabs = createBottomTabNavigator();

export default function MainTabs() {
  const { colors } = useTheme();

  return (
    <MyTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,

        // Theme-aware colors
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,

        // Icon size
        tabBarIconStyle: { paddingTop: 6 },

        // Label style
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 6,
          lineHeight: 16,
        },

        // Tab bar style with theme colors
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          paddingTop: 6,
          backgroundColor: colors.tabBar,
          borderTopWidth: 0.5,
          borderTopColor: colors.tabBarBorder,
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
            },
            android: {
              elevation: 4,
            },
          }),
        },
      }}
    >
      <MyTabs.Screen
        name={StackNames.HomeStack}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <MyTabs.Screen
        name={ScreenNames.SavedScreen}
        component={SavedArticles}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <MyTabs.Screen
        name={ScreenNames.FavScreen}
        component={FavoriteArticles}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </MyTabs.Navigator>
  );
}
