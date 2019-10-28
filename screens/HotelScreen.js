import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import CardList from '../components/CardList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { RESTAURANTS } from '../data/restaurant-data'; // dummy data


const HotelScreen = (props) => {
  // const dummy = MEALS.filter(
  //   meal => meal.categoryIds == "c3" || meal.categoryIds == "c4"
  // );
  const dummy = RESTAURANTS.map(dum => dum);

  return (
    <CardList
      listData={dummy}
      navigation={props.navigation}
    />
  );
}

HotelScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "宿泊",
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTintColor: "#fff",
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
