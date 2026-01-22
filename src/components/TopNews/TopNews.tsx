import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { ArticleType } from '../../utils/types/articleType';
import { getData } from '../../utils/helpers/apiService';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainstackParamList } from '../../navigation/MainStack';
import ScreenNames from '../../navigation/screenNames';

export default function TopNews() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const { navigate } =
    useNavigation<NavigationProp<MainstackParamList, ScreenNames.HomeScreen>>();

  useEffect(() => {
    getTopNews();
  }, []);

  function getTopNews() {
    const url = '/top-headlines?country=us';

    getData(url)
      .then(res => {
        const validArticles = res.data?.articles?.filter(
          (article: ArticleType) => article?.urlToImage !== null,
        );
        setArticles(validArticles || []);
      })
      .catch(err => {
        console.log('error:', err);
      });
  }
  function articleDetails(article: ArticleType) {
    navigate(ScreenNames.ArticleDetails, {
      article,
    });
  }
  function renderNews(item: ArticleType) {
    return (
      <TouchableOpacity
        style={styles.cardCont}
        onPress={() => articleDetails(item)}
        activeOpacity={0.95}
      >
        <Image
          style={styles.cardArticleImg}
          source={{ uri: item.urlToImage }}
          resizeMode="cover"
        />
        <Text style={styles.cardArticleName}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Top News</Text>
      <FlatList
        data={articles}
        renderItem={({ item }) => renderNews(item)}
        contentContainerStyle={styles.listCont}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
}
