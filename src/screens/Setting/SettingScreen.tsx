import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNames from '../../navigation/StackNames';
import { useTheme, ThemeMode } from '../../theme';
import { createStyles } from './styles';

// Theme options configuration
const themeOptions: { mode: ThemeMode; label: string; icon: string }[] = [
  { mode: 'system', label: 'System', icon: 'phone-portrait-outline' },
  { mode: 'light', label: 'Light', icon: 'sunny-outline' },
  { mode: 'dark', label: 'Dark', icon: 'moon-outline' },
];

export default function SettingScreen() {
  const { reset } = useNavigation();
  const { colors, themeMode, setThemeMode } = useTheme();
  const styles = createStyles(colors);

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
        {/* Settings header */}
        <View style={styles.header}>
          <Icon name="settings-outline" size={28} color={colors.text} />
          <Text style={styles.title}>Settings</Text>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          
          <View style={styles.themeContainer}>
            {themeOptions.map(option => {
              const isSelected = themeMode === option.mode;
              return (
                <TouchableOpacity
                  key={option.mode}
                  style={[
                    styles.themeOption,
                    isSelected && styles.themeOptionSelected,
                  ]}
                  onPress={() => setThemeMode(option.mode)}
                  activeOpacity={0.7}
                >
                  <Icon
                    name={option.icon}
                    size={24}
                    color={isSelected ? colors.primary : colors.textMuted}
                  />
                  <Text
                    style={[
                      styles.themeOptionText,
                      isSelected && styles.themeOptionTextSelected,
                    ]}
                  >
                    {option.label}
                  </Text>
                  {isSelected && (
                    <Icon
                      name="checkmark-circle"
                      size={18}
                      color={colors.primary}
                      style={styles.checkIcon}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Icon name="log-out-outline" size={20} color={colors.danger} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
