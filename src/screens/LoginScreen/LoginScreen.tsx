import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import StackNames from '../../navigation/StackNames';

export default function LoginScreen() {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={() => {
        navigate(StackNames.MainTabs);
      }}
    >
      <Text>Welocme LoginScreen</Text>
    </TouchableOpacity>
  );
}
