import React, { useState, useContext } from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { MainProvider, MainContext } from '../store/MainContext';


const QRReaderScreen = (props) => {
  const dummyData = 490;
  const { currentPoints, setPoints } = useContext(MainContext);
  const { QRScanned, setQRScanned } = useContext(MainContext);
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
        title="scan dummy data"
        onPress={() => dummyScanndQRHandler(dummyData)}
      />

      <BarCodeScanner
        onBarCodeRead={scanned ? undefined : scannedQRHandler}
        style={{ height: 300, width: 300 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default QRReaderScreen;
