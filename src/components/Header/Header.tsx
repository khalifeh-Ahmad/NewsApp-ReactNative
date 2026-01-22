import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/images/prof.jpeg')}
      />
      <Text style={styles.title}>KhA News</Text>
      <Image
        style={styles.img}
        source={require('../../assets/images/notification.png')}
      />
    </View>
  );
}
