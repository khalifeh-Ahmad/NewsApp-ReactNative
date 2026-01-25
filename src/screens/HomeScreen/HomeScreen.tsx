import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNews from '../../components/MainNews/MainNews';
import TopNews from '../../components/TopNews/TopNews';
import { useTheme } from '../../theme';
import { useSearchNews } from '../../hooks/useSearchNews';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import styles from './styles';
import Header from '../../components/Header/Header';

const HomeScreen = () => {
  const { colors } = useTheme();
  const { query, setQuery, results, loading } = useSearchNews();
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(query.trim().length > 0);
  }, [query]);


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
    {/* 🔍 Search Bar */}
    <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
      <TextInput
        style={[styles.searchInput, { color: colors.text }]}
        placeholder="Search news..."
        placeholderTextColor={colors.text + '80'}
        value={query}
        onChangeText={setQuery}
      />
      {query ? (
        <TouchableOpacity onPress={() => setQuery('')}>
          <Text style={{ color: colors.text }}>✕</Text>
        </TouchableOpacity>
      ) : null}
    </View>

    {isSearching ? (
      //  Show search results using your existing ArticleCard
      loading ? (
        <ActivityIndicator size="small" color={colors.primary} style={styles.loader} />
      ) : (
        <FlatList
          data={results}
          renderItem={({ item }) => <ArticleCard item={item} showSaveButton={true} />}
          keyExtractor={(item) => item.url!}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )
    ) : (
      <View style={styles.scrollViewContent}>
        <Header />
        <MainNews />
        <TopNews />
      </View>
    )}
  </SafeAreaView>
  );
};

export default HomeScreen;
