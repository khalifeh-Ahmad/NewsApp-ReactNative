import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import { useTheme } from '../../theme';
import { createStyles } from './styles';

export default function Header() {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const styles = createStyles(colors);

  function handleImgClick() {
    navigate(ScreenNames.SettingScreen);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImgClick}>
        <Image
          style={styles.img}
          source={require('../../assets/images/prof.jpeg')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>KhA News</Text>
      <Image
        style={styles.img}
        source={require('../../assets/images/notification.png')}
      />
    </View>
  );
}
