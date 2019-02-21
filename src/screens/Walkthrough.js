import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import WalkthroughItem from '../components/WalkthroughItem';

//const url = '../assets/image/walksthrough1.png';
class Walkthrough extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WalkthroughItem
          title='Lorem ipsum is placeholder'
          description='Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut l'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Walkthrough;
