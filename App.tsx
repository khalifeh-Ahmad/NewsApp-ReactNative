/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import { useSavedArticlesStore } from './src/store/useSavedArticlesStore';

function App() {
  const initializeStore = useSavedArticlesStore(state => state.initializeStore);

  // Initialize saved articles store on app startup
  useEffect(() => {
    initializeStore();
  }, [initializeStore]);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
