import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import StackNames from '../../navigation/StackNames';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingScreen() {
  const { reset } = useNavigation();

  function handleLogout() {
    reset({
      index: 0,
      routes: [
        {
          name: StackNames.AuthStack,
        },
      ],
    });
  }

  return (
   <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Optional: Settings header */}
        <View style={styles.header}>
          <Icon name="settings-outline" size={28} color="#1a1a1a" />
          <Text style={styles.title}>Settings</Text>
        </View>

        {/* Logout Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Icon name="log-out-outline" size={20} color="#ff3b30" />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
