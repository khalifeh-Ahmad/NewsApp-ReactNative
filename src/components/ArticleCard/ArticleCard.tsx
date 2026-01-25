import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/StackNames';
import { IProps } from './types';
import { useSavedArticlesStore } from '../../store/useSavedArticlesStore';
import { useTheme } from '../../theme';
import { createStyles } from './styles';
import { getReadTime } from '../../utils/helpers/readTime';

export default function ArticleCard({ item, showSaveButton = true }: IProps) {
  const { navigate } = useNavigation<any>();
  const { colors } = useTheme();
  const styles = createStyles(colors);
  
  const readTime = getReadTime(item.content || item.description || '');


  const { isArticleSaved, toggleSaveArticle } = useSavedArticlesStore();
  const isSaved = isArticleSaved(item.url);

  function gotoArticleDetails() {
    navigate(StackNames.SharedStack, {
      screen: ScreenNames.ArticleDetails,
      params: {
        article: item,
      },
    });
  }

  function handleSavePress() {
    toggleSaveArticle(item);
  }

  return (
    <TouchableOpacity style={styles.cardCont} onPress={gotoArticleDetails}>
      <Image
        style={styles.cardArticelImage}
        source={{ uri: item.urlToImage }}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardArticleName} numberOfLines={3}>
          {item.title}
        </Text>
        <Text style={styles.readTime}>{readTime} min read</Text>
        {showSaveButton && (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSavePress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name={isSaved ? 'bookmark' : 'bookmark-outline'}
              size={20}
              color={isSaved ? colors.primary : colors.textMuted}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}
