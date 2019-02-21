import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Spacing } from '../styles/variables';

class WalkthroughItem extends Component {
  render() {
    const { url, title, description } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/image/walksthrough1.png')} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.Normal,
  },
  title: {
    ...Fonts.Heading3,
    textAlign: 'center',
  },
  description: {
    ...Fonts.Body2,
    textAlign: 'center',
  },
});

export default WalkthroughItem;
