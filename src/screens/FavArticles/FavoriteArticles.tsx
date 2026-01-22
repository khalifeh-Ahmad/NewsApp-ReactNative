import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ArticleType } from '../../utils/types/articleType';
import { useFavArticlesStore } from '../../store/useFavArticelStore';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

export default function FavoriteArticles() {
  const { navigate } = useNavigation();

  const { favList } = useFavArticlesStore();

  function renderItem(item: ArticleType) {
    return <ArticleCard item={item} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourit Articles</Text>
      <FlatList data={favList} renderItem={({ item }) => renderItem(item)} />
    </View>
  );
}
