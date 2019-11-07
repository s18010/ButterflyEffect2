import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { HOTELS } from '../data/hotel-data';
import Colors from '../constants/Colors';


const HotelDetailScreen = (props) => {
  const hotelId = props.navigation.getParam('mealId');
  const selectedItem = HOTELS.find(hotel => hotel.id === hotelId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedItem.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedItem.name}</Text>
        <Text>電話番号: {selectedItem.tel}</Text>
        <Text>住所: {selectedItem.address}</Text>
        <Text>料金: 1泊{selectedItem.price}円~</Text>
        <Text>{selectedItem.description}</Text>
      </View>
    </ScrollView>
  );
}

HotelDetailScreen.navigationOptions = (navigationData) => {
  const hotelId = navigationData.navigation.getParam('hotelId');
  const selectedItem = HOTELS.find(hotel => hotel.id === hotelId);

  return {
    headerTitle: selectedItem.name,
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTintColor: "#fff",
  };
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default HotelDetailScreen;
