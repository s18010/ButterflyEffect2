import React, { useState, useContext } from 'react';
import { Button, View, StyleSheet, Alert, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import LottieView from "lottie-react-native";
import { MainProvider, MainContext } from '../contexts/MainContext';


const QRReaderScreen = (props) => {
  const dummyData = 30;
  const { currentPoints, setPoints, QRScanned, setQRScanned } = useContext(MainContext);
  const [scanned, setScanned] = useState(false);

  const getPermissions = async () => {
    const results = await Promise.all([
      Permissions.askAsync(Permissions.CAMERA_ROLL),
      Permissions.askAsync(Permissions.CAMERA)
    ]);
    if (results.some(({ status }) => status !== 'granted')) {
      Alert.alert(
        "ButterflyEffectがカメラへのアクセス許可を求めています", [{ text: "OKAY" }]
      );
      return false;
    }
    return true;
  };

  const scannedQRHandler = async ({ type, data }) => {
    const hasPermission = await getPermissions();
    if (!hasPermission) {
      return;
    }
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setQRScanned(true);
    props.navigation.navigate('Home');
  };

  const dummyScanndQRHandler = (data) => {
    setPoints(currentPoints + data);
    setQRScanned(true);
    props.navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="_"
        onPress={() => dummyScanndQRHandler(dummyData)}
      />

      <BarCodeScanner
        onBarCodeRead={scanned ? undefined : scannedQRHandler}
        style={{ height: 300, width: 300 }}
      />
      {/* {QRScanned ? (
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
          source={require('../assets/qr-code-scanner.json')}
        />
      ) : <Text></Text>} */}

    </View>
  );
};

const styles = StyleSheet.create({});

export default QRReaderScreen;
