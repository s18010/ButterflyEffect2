import React, { useState, useContext } from 'react';
import { Platform, ImageBackground, View, StyleSheet } from 'react-native';
import { Button, Container, Icon, Text, Card } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { MainContext } from '../store/MainContext';
import Colors from '../constants/Colors';


const HomeScreen = (props) => {
  const { currentPoints } = useContext(MainContext);

  // const [selectedImage, setSelectedImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EjvkRoy42l1dFnZNFb17qOmd8WGpuOiJn2xUjigouLoez_cTMQ&s");
  const [selectedImage, setSelectedImage] = useState("https://m.media-amazon.com/images/I/61JljT2YNmL._SS500_.jpg");

  const moveToQRScreenHandler = () => {
    props.navigation.navigate('QRReader');
  }

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

  const takeImageHandler = async () => {
    const hasPermission = await getPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      quality: 0.5,
    });

    setSelectedImage(image.uri);
  };

  return (
    <Container>
      <ImageBackground
        source={{ uri: selectedImage }}
        style={{ width: '100%', height: '100%' }}>

        <View style={styles.topContainer}>

          <View style={styles.pointContainer}>
            <Text style={styles.points}>{currentPoints}
              <Text style={styles.pointText}>Points</Text>
            </Text>
          </View>

          <Button info small
            style={styles.qrButton}
            onPress={moveToQRScreenHandler} >
            <Text> QRコード読み取り </Text>
          </Button>

          {/* <Button
            title="壁紙を変更"
            onPress={takeImageHandler}
          /> */}
        </View>

        <Button info
          style={styles.changeWallpaperButton}
          onPress={takeImageHandler} >
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
