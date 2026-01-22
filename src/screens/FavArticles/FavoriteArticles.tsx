import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import StackNames from '../../navigation/StackNames';
import ScreenNames from '../../navigation/ScreenNames';
import { useNavigation } from '@react-navigation/native';

export default function FavoriteArticles() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>FavoriteArticles Sceen</Text>
      <TouchableOpacity
        onPress={() => {
          navigate(StackNames.SharedStack, {
            screen: ScreenNames.ArticleDetails,
          });
        }}
      >
        <Text>Go to Fav Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
