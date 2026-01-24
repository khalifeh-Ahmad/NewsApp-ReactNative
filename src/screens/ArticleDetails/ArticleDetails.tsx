import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainstackParamList } from '../../navigation/MainStack';
import ScreenNames from '../../navigation/ScreenNames';
import { useFavArticlesStore } from '../../store/useFavArticelStore';
import { useSavedArticlesStore } from '../../store/useSavedArticlesStore';
import { useTheme } from '../../theme';
import { createStyles } from './styles';

export default function ArticleDetails() {
  const { goBack } = useNavigation();
  const { colors, isDark } = useTheme();
  const styles = createStyles(colors);

  const { params } =
    useRoute<RouteProp<MainstackParamList, ScreenNames.ArticleDetails>>();
  const { article } = params ?? {};
  const { content, title, urlToImage } = article ?? {};

  // Favorites store
  const { favList, addToFavList } = useFavArticlesStore();
  const isFavorited = article?.url
    ? favList.some(a => a.url === article.url)
    : false;

  // Saved articles store (offline)
  const { isArticleSaved, toggleSaveArticle } = useSavedArticlesStore();
  const isSaved = article?.url ? isArticleSaved(article.url) : false;

  const handleSaveForOffline = () => {
    if (article) {
      toggleSaveArticle(article);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={goBack}>
            <Icon name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.saveOfflineBtn, isSaved && styles.savedBtn]}
            onPress={handleSaveForOffline}
          >
            <Ionicons
              name={isSaved ? 'bookmark' : 'bookmark-outline'}
              size={20}
              color={isSaved ? '#fff' : colors.text}
            />
            <Text style={[styles.saveOfflineText, isSaved && styles.savedText]}>
              {isSaved ? 'Saved' : 'Save Offline'}
            </Text>
          </TouchableOpacity>
        </View>
        <Image source={{ uri: urlToImage }} style={styles.coverImg} />
        <View style={styles.dataCont}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{content}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.addTofavBtn,
          isFavorited && styles.removeFavBtn,
        ]}
        onPress={() => {
          if (article) addToFavList(article);
        }}
      >
        <Text style={styles.addToFavText}>
          {isFavorited ? 'Added to Favorites' : 'Add To Fav'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
