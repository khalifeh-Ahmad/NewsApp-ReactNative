import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { ArticleType } from '../../utils/types/articleType';
import { useSavedArticlesStore } from '../../store/useSavedArticlesStore';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import { useTheme } from '../../theme';
import { createStyles } from './styles';

export default function SavedArticles() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  
  const { savedArticles, isLoading, isInitialized, initializeStore } =
    useSavedArticlesStore();

  useEffect(() => {
    // Initialize store on mount to load saved articles from AsyncStorage
    initializeStore();
  }, [initializeStore]);

  function renderItem(item: ArticleType) {
    return <ArticleCard item={item} showSaveButton={true} />;
  }

  function renderEmptyComponent() {
    if (isLoading) {
      return (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.emptyText}>Loading saved articles...</Text>
        </View>
      );
    }

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>📑</Text>
        <Text style={styles.emptyTitle}>No Saved Articles</Text>
        <Text style={styles.emptyText}>
          Articles you save for offline reading will appear here.
        </Text>
        <Text style={styles.emptyHint}>
          Tap the bookmark icon on any article to save it.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Articles</Text>
      <Text style={styles.subtitle}>
        {savedArticles.length > 0
          ? `${savedArticles.length} article${savedArticles.length !== 1 ? 's' : ''} saved for offline reading`
          : 'Read articles even without internet'}
      </Text>
      <FlatList
        data={savedArticles}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => item.url || index.toString()}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={
          savedArticles.length === 0 ? styles.emptyListContainer : undefined
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
