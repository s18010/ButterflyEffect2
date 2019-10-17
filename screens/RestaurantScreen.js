import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import RestaurantList from '../components/RestaurantList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { MEALS } from '../data/dummy-data'; // dummy data


const RestaurantScreen = (props) => {
  return (
    <RestaurantList
      listData={MEALS}
      navigation={props.navigation}
    />
  );
};

RestaurantScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "レストラン",
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }} />
      </HeaderButtons>
    )
  };
};

export default RestaurantScreen;
