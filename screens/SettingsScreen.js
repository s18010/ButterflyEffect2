import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import { MainContext } from '../contexts/MainContext';

const list = [
  {
    title: 'プロフィール設定',
    icon: 'face'
  },
  {
    title: 'ポイント履歴',
    icon: 'attach-money'
  },
  {
    title: '通知設定',
    icon: 'notifications',
  },
  {
    title: "破局申請",
    icon: "blur-off"
    // icon: "receipt"
  },
];

// どの設定項目押してもポイント履歴にいくよ
const SettingsScreen = (props) => {
  const { fetchData } = useContext(MainContext);
  const [pointData, setPointData] = useState([]);

  return (
    <View>
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon }}
            bottomDivider
            chevron
            onPress={() => {
              fetchData()
              props.navigation.navigate({
                routeName: 'PointHistory'
              })
            }}
          />
        ))
      }
    </View>
  );
}

SettingsScreen.navigationOptions = () => {
  return {
    headerTitle: "その他",
  };
};

export default SettingsScreen;
