import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";

const SettingsScreen = (props) => {
  useEffect(() => {
    // this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(0, 1200);
  });

  const resetAnimation = () => {
    this.animation.reset();
    // this.animation.play();
    this.animation.play(0, 1200);
  };

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#fff',
        }}
        source={require('../assets/done-button.json')}
      // OR find more Lottie files @ https://lottiefiles.com/featured
      />
      <View style={styles.buttonContainer}>
        <Button title="Restart Animation" onPress={resetAnimation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

SettingsScreen.navigationOptions = () => {
  return {
    headerTitle: "設定",
  };
};

export default SettingsScreen;
