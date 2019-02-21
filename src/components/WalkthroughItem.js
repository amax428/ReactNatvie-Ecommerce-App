import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Spacing, Colors } from '../styles/variables';

class WalkthroughItem extends Component {
  render() {
    const { url, title, description } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={url} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.Big,
    paddingTop: Spacing.Big,
  },
  image: {
    padding: Spacing.Big,
  },
  title: {
    ...Fonts.Heading3,
    textAlign: 'center',
    marginBottom: Spacing.Normal,
    color: Colors.Black,
  },
  description: {
    ...Fonts.Body2,
    textAlign: 'center',
    color: Colors.Grey.main,
  },
});

export default WalkthroughItem;
