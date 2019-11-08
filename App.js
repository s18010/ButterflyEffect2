import React, { useState } from 'react';
import { useScreens } from 'react-native-screens';
import { MainProvider } from './store/MainContext';
import MainNavigator from './navigation/MainNavigator';

useScreens();

export default function App() {
  return (
    <MainProvider>
      <MainNavigator />
    </MainProvider>
  );
}
