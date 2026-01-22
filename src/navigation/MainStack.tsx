import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './Stacks/Auth.Stack';
import StackNames from './stackNames';
import MainTabs from './Tabs/MainTabs';

const Stack = createStackNavigator<MainstackParamList>();
export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={StackNames.AuthStack} component={AuthStack} />
      <Stack.Screen name={StackNames.MainTabs} component={MainTabs} />
    </Stack.Navigator>
  );
}

export type MainstackParamList = {
  [StackNames.AuthStack]: undefined;
  [StackNames.MainTabs]: undefined;
};
