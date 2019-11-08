import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Card from "./Card";

export default (props) => {
  const [search, setSearch] = useState("");
  const updateSearch = (input) => {
    setSearch(input);
  };

  const renderItem = (itemData) => {
    return (
      <Card
        name={itemData.item.name}
        imageUrl={itemData.item.imageUrl}
        address={itemData.item.address}
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
      <SearchBar
        onChangeText={updateSearch}
        placeholder="検索"
        value={search}
        placeholderTextColor="#fff"
        lightTheme={true}
        round={true}
      />
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  }
});

