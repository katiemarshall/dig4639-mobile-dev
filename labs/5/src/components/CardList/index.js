import React from 'react';
import { View } from 'react-native';
import Weather from "../Weather";

 class CardList extends React.Component {
  render() {
    return (
      <View>
        <Weather />
      </View>
    );
  }
}

export default CardList;