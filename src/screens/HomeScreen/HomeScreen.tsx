import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import MainNews from '../../components/MainNews/MainNews';
//import styles from './styles';
import TopNews from '../../components/TopNews/TopNews';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <MainNews />
        <TopNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
