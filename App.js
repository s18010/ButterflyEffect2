import React from 'react';
import { useScreens } from 'react-native-screens';
import { MainProvider } from './contexts/MainContext';
import MainNavigator from './navigation/MainNavigator';

useScreens();

export default function App() {
  return (
    <MainProvider>
      <MainNavigator />
    </MainProvider>
  );
}
