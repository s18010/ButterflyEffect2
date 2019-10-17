import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RestaurantItem from "./RestaurantItem";


export default (props) => {
  const renderRestItem = (itemData) => {
    return (
      <RestaurantItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectItem={() => {
          props.navigation.navigate({
            routeName: 'RestaurantDetail',
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />);
  };

  return (
    <View style={styles.list} >
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderRestItem}
        style={{ width: "100%" }}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

