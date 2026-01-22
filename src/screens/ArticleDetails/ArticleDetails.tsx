import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainstackParamList } from '../../navigation/MainStack';
import ScreenNames from '../../navigation/screenNames';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ArticleDetails() {
  const { goBack } = useNavigation();
  const { params } =
    useRoute<RouteProp<MainstackParamList, ScreenNames.ArticleDetails>>();
  const { article } = params ?? {};
  const { content, title, urlToImage } = article ?? {};
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={goBack}>
            <Icon name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: urlToImage }} style={styles.coverImg} />
        <View style={styles.dataCont}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
