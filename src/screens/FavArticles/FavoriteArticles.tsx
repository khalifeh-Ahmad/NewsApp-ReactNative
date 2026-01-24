import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { ArticleType } from '../../utils/types/articleType';
import { useFavArticlesStore } from '../../store/useFavArticelStore';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import { useTheme } from '../../theme';
import { createStyles } from './styles';

export default function FavoriteArticles() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const { favList } = useFavArticlesStore();

  function renderItem(item: ArticleType) {
    return <ArticleCard item={item} />;
  }

  function renderEmptyComponent() {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>❤️</Text>
        <Text style={styles.emptyTitle}>No Favorites Yet</Text>
        <Text style={styles.emptyText}>
          Articles you mark as favorite will appear here.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite Articles</Text>
      <Text style={styles.subtitle}>
        {favList.length > 0
          ? `${favList.length} article${favList.length !== 1 ? 's' : ''} in your favorites`
          : 'Your favorite articles collection'}
      </Text>
      <FlatList
        data={favList}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => item.url || index.toString()}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={
          favList.length === 0 ? styles.emptyListContainer : undefined
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
