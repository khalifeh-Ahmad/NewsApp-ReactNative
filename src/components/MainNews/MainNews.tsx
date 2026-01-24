import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ArticleType } from '../../utils/types/articleType';
import { getData } from '../../utils/helpers/apiService';
import ScreenNames from '../../navigation/ScreenNames';
import { MainstackParamList } from '../../navigation/MainStack';
import { cleanHtml } from '../../utils/helpers/cleanHtml';
import StackNames from '../../navigation/StackNames';
import { useTheme } from '../../theme';
import { createStyles } from './styles';

export default function MainNews() {
  const [topNews, setTopNews] = useState<ArticleType[]>([]);
  const { colors, isDark } = useTheme();
  const styles = createStyles(colors, isDark);

  const { navigate } =
    useNavigation<NavigationProp<MainstackParamList, ScreenNames.HomeScreen>>();

  useEffect(() => {
    getNews();
  }, []);

  function getNews() {
    const url = '/everything?q=canada';
    getData(url)
      .then(res => {
        const articles = res.data?.articles?.filter(
          (article: ArticleType) => article?.urlToImage !== null,
        );
        setTopNews(articles);
      })
      .catch(err => {
        console.log('error:', err);
      });
  }

  function articleDetails(article: ArticleType) {
    navigate(StackNames.SharedStack, {
      screen: ScreenNames.ArticleDetails,
      params: {
        article,
      },
    });
  }

  const renderNews = (item: ArticleType) => {
    const displayContent = cleanHtml(
      item.content || item.description || 'No description available',
    );
    return (
      <TouchableOpacity
        onPress={() => articleDetails(item)}
        activeOpacity={0.9}
      >
        <ImageBackground
          source={{ uri: item.urlToImage }}
          style={styles.container}
          resizeMode="cover"
        >
          <View style={styles.whiteSec}>
            <View style={styles.redSec}>
              <Text style={styles.headTxt}>{item.source.name}</Text>
            </View>
            <Text style={styles.secTxt}>{displayContent}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        style={styles.listContainer}
        data={topNews}
        renderItem={({ item }) => renderNews(item)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}
