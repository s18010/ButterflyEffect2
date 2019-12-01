import React, { useState, useEffect, useContext } from 'react';
import { Platform, ImageBackground, View, StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";
import { Button, Container, Text } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { MainContext } from '../contexts/MainContext';
import Colors from '../constants/Colors';


const HomeScreen = (props) => {
  const { currentPoints, QRScanned, setQRScanned, pointData } = useContext(MainContext);
  const [selectedImage, setSelectedImage] = useState("https://d1f5hsy4d47upe.cloudfront.net/08/0851d07ca105541de11523aab327d572_t.jpeg");

  const getPermissions = async () => {
    const results = await Promise.all([
      Permissions.askAsync(Permissions.CAMERA_ROLL),
      Permissions.askAsync(Permissions.CAMERA)
    ]);
    if (results.some(({ status }) => status !== 'granted')) {
      Alert.alert(
        "ButterflyEffect Would Like to Access the Camera", [{ text: "OKAY" }]
      );
      return false;
    }
    return true;
  };

  const moveToQRScreenHandler = () => {
    setQRScanned(false);
    props.navigation.navigate('QRReader');
  }

  const setBgImageHandler = async () => {
    const hasPermission = await getPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      quality: 0.5,
    });
    setSelectedImage(image.uri);
  };

  useEffect(() => {
    if (QRScanned == true) {
      this.animation.play(0, 1200);
    }
  });

  return (
    <Container>
      <ImageBackground
        // source={{ uri: selectedImage }}
        source={require("../assets/home.jpg")}
        style={{ width: '100%', height: '100%' }}>

        <View style={styles.topContainer}>

          <View style={styles.pointContainer}>
            <Text style={styles.points}>{currentPoints}
              <Text style={styles.pointText}>Points</Text>
            </Text>
            {/* keyがないwarningがでるから一旦コメントアウト */}
            {/* {pointData.map(data =>
              (<Text>{data.name}</Text>)
            )} */}
          </View>

          <Button info small
            style={styles.qrButton}
            onPress={moveToQRScreenHandler} >
            {/* onPress={setBgImageHandler} > */}
            <Text> QRコード読み取り </Text>
          </Button>
        </View>

        {QRScanned ? (
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 400,
              height: 400,
              backgroundColor: 'transparent',
            }}
            speed={0.8}
            source={require('../assets/done-button.json')}
          />
        ) : <Text></Text>}


        <Button info
          style={styles.changeWallpaperButton}
          onPress={setBgImageHandler} >
          <Text>壁紙を変更</Text>
        </Button>
      </ImageBackground >
    </Container>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerTitle: "ホーム",
  };
};

const styles = StyleSheet.create({
  topContainer: {
    position: "relative",
    height: "20%",
    width: "100%",
    marginVertical: 20,
    paddingVertical: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  pointContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  points: {
    fontSize: 50,
    justifyContent: "center",
  },
  pointText: {
    fontSize: 25,
  },
  qrButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    display: 'flex',
  },
  changeWallpaperButton: {
    position: "absolute",
    bottom: 25,
    right: 25,
    color: Colors.primaryColor,
    display: 'flex',
  },
});

export default HomeScreen;
