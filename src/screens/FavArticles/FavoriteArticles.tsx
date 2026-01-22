import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

export default function FavoriteArticles() {
  return (
    <View style={styles.container}>
      <Text>FavoriteArticles Sceen</Text>
      <TouchableOpacity onPress={() => {alert('Hi')}}>
        <Text>Go to Fav Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
