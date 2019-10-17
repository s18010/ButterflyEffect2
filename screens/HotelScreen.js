import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import RestaurantList from '../components/RestaurantList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { MEALS } from '../data/dummy-data'; // dummy data


const HotelScreen = (props) => {
  const dummy = MEALS.filter(
    meal => meal.categoryIds == "c3" || meal.categoryIds == "c4"
  );

  return (
    <RestaurantList
      listData={dummy}
      navigation={props.navigation}
    />
  );
}

HotelScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "宿泊",
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

export default HotelScreen;
