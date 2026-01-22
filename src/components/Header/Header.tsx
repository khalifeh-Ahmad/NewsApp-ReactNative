import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';

export default function Header() {
  const { navigate } = useNavigation();
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
