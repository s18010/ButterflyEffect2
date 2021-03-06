import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import QRReaderScreen from '../screens/QRReaderScreen';
import CalendarScreen from '../screens/CalendarScreen';
import BestCouplesScreen from '../screens/BestCouplesScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import HotelScreen from '../screens/HotelScreen';
import HotelDetailScreen from '../screens/HotelDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PointHistoryScreen from '../screens/PointHistoryScreen';


const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "#fff",
}

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  QRReader: QRReaderScreen,
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const CalendarNavigator = createStackNavigator({
  Calendar: CalendarScreen,
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const BestCouplesNavigator = createStackNavigator({
  BestCouples: BestCouplesScreen,
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

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
  HotelDetail: HotelDetailScreen,
}, {
  navigationOptions: { drawerLabel: "宿泊" }
},
  { defaultNavigationOptions: defaultStackNavOptions },
);

// dummy
const LeisureNavigator = createStackNavigator({
  Leusures: RestaurantScreen,
  LeisureDetail: RestaurantDetailScreen,
}, {
  navigationOptions: { drawerLabel: "レジャー" }
},
  { defaultNavigationOptions: defaultStackNavOptions },
);

// dummy
const GiftNavigator = createStackNavigator({
  Gifts: RestaurantScreen,
  GiftDetail: RestaurantDetailScreen,
}, {
  navigationOptions: { drawerLabel: "プレゼント" }
},
  { defaultNavigationOptions: defaultStackNavOptions },
);

const ShopDrawer = createDrawerNavigator(
  {
    Restaurants: RestaurantNavigator,
    Hotels: HotelNavigator,
    Leisures: LeisureNavigator,
    Gifts: GiftNavigator,
  },
);

const SettingsNavigator = createStackNavigator(
  {
    Settings: SettingsScreen,
    PointHistory: PointHistoryScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  },
);

const navBarConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name={Platform.OS === 'android' ? "md-home" : "ios-home"} size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: 'ホーム',
    }
  },
  Calendar: {
    screen: CalendarNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name={Platform.OS === "android" ? "md-calendar" : "ios-calendar"} size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: "カレンダー",
    }
  },
  BestCouples: {
    screen: BestCouplesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name={Platform.OS === "android" ? "md-heart-empty" : "ios-heart-empty"} size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: "ベストカップル",
    }
  },
  Restaurants: {
    screen: ShopDrawer,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name={Platform.OS === "android" ? "md-restaurant" : "ios-restaurant"} size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: "お店",
    }
  },
  Settings: {
    screen: SettingsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name={Platform.OS === "android" ? "md-settings" : "ios-settings"} size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: "その他",
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
