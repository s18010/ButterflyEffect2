import React, { useContext } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements'
import { MainContext } from '../contexts/MainContext';

const PointHistoryScreen = (props) => {
  const { pointData } = useContext(MainContext);

  return (
    <View>
      {
        pointData.map((data, i) => (
          <ListItem
            key={i}
            title={data.name}
            subtitle={data.created_at}
            subtitleStyle={{ color: "#949494" }}
            rightTitle={"+P" + String(data.point)}
            leftIcon={{ name: "hotel" }}
            // leftIcon={{name: data.cagegory}}
            bottomDivider
            chevron
          />
        ))
      }
    </View >
  );
}

export default PointHistoryScreen;
