import React from 'react';
import { Text, StyleSheet, } from 'react-native';

const HomeScreen = (props) => {
  return (
    <Text>Home Screen</Text>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerTitle: "ホーム",
  };
};

export default HomeScreen;
