import React, { useState } from 'react';
import { Image, View, ScrollView, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Fab } from 'native-base';
import { SearchBar } from 'react-native-elements';
import Colors from '../constants/Colors';
import { POSTS } from '../data/bestcouples-data';


const BestCouplesScreen = (props) => {
  const [fabActive, setFabActive] = useState(false);
  const [search, setSearch] = useState("");
  const updateSearch = (input) => {
    setSearch(input);
  };

  const posts = POSTS.map(post => (
    <Card key={post.id}>
      <CardItem>
        <Left>
          <Thumbnail source={require('../assets/default_icon.png')} />
          <Body>
            <Text>{post.userName}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{uri: post.imageUri}} style={{ height: 200, width: null, flex: 1 }} />
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 いいね</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent style={{ justifyContent: "start" }}>
            <Icon active name="chatbubbles" />
            <Text>4</Text>
          </Button>
        </Body>
        <Right>
          <Text>11時間前</Text>
        </Right>
      </CardItem>
    </Card>
  ));

  return (
    <View>
      <SearchBar
        onChangeText={updateSearch}
        placeholder="検索"
        value={search}
        placeholderTextColor="#fff"
        lightTheme={true}
        round={true}
      />
      <ScrollView>
        <Container style={{ position: "relative" }}>
          <Content padder>
            {posts}
          </Content>
        </Container>
      </ScrollView>

      <View style={{ flex: 1, position: "absolute", bottom: 80, right: 10 }}>
        <Fab
          active={fabActive}
          direction="up"
          style={styles.fab}
          position="bottomRight"
          onPress={() => setFabActive(!fabActive)}>
          <Icon name="add" />
          {/* <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button> */}
        </Fab>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: Colors.primaryColor,
  },
})

BestCouplesScreen.navigationOptions = () => {
  return {
    headerTitle: "ベストカップル",
  };
};

export default BestCouplesScreen;