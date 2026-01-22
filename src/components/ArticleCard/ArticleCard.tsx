import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/StackNames';
import styles from './styles';
import { IProps } from './types';

export default function ArticleCard({ item }: IProps) {
  const { navigate } = useNavigation<any>();

  function gotoArticleDetails() {
    navigate(StackNames.SharedStack, {
      screen: ScreenNames.ArticleDetails,
      params: {
        article: item,
      },
    });
  }

  return (
    <TouchableOpacity style={styles.cardCont} onPress={gotoArticleDetails}>
      <Image
        style={styles.cardArticelImage}
        source={{ uri: item.urlToImage }}
      />
      <Text style={styles.cardArticleName}>{item.title}</Text>
    </TouchableOpacity>
  );
}
