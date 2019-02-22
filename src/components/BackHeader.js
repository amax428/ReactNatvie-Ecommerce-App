import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Fonts, Colors, Spacing } from '../styles/variables';

class BackHeader extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.container}
      >
        <Image
          source={require('../assets/image/back_header.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
  },
  image: {
    height: 20,
    marginRight: Spacing.Small,
  },
  text: {
    ...Fonts.Heading4,
    color: Colors.Accent.main,
  }
});

export default BackHeader;
