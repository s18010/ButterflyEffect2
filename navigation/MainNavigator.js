import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import BestCouplesScreen from '../screens/BestCouplesScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import HotelScreen from '../screens/HotelScreen';
import GuideScreen from '../screens/GuideScreen';


const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "#fff",
}

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
}, {
  // initialRouteName: 'MealDetail'  // setting the initial page
  defaultNavigationOptions: defaultStackNavOptions
},
);

const RestaurantNavigator = createStackNavigator({
  Restaurants: RestaurantScreen,
  RestaurantDetail: RestaurantDetailScreen,
}, {
  navigationOptions: { drawerLabel: "レストラン" }
},
  { defaultNavigationOptions: defaultStackNavOptions },
);

const HotelNavigator = createStackNavigator({
  Hotels: HotelScreen,
}, {
  navigationOptions: { drawerLabel: "宿泊" }
},
  { defaultNavigationOptions: defaultStackNavOptions },
);

const ShopDrawer = createDrawerNavigator(
  {
    Restaurants: RestaurantNavigator,
    Hotels: HotelNavigator,
  },
);

const GuideNavigator = createStackNavigator({
  Guide: GuideScreen,
}, {
  defaultNavigationOptions: defaultStackNavOptions
},
);

const navBarConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: 'ホーム',
    }
  },
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-calendar" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: "カレンダー",
    }
  },
  BestCouples: {
    screen: BestCouplesScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-heart-empty" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: "ベストカップル",
    }
  },
  Restaurants: {
    screen: ShopDrawer,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: "お店",
    }
  },
  Guide: {
    screen: GuideScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-paper-plane" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: "指南書",
    }
  },
};


const MainNavigator = createBottomTabNavigator(navBarConfig, {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
}
);

export default createAppContainer(MainNavigator);
