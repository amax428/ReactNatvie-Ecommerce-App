import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, Spacing, BorderRadius } from '../styles/variables';

class SocialButton extends Component {
  render() {
    const { type } = this.props;
    const icon = type === 'Facebook' ? require('../assets/image/facebook.png') :
      require('../assets/image/google.png');
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[styles.container, type === 'Facebook' ? styles.facebookTheme : styles.googleTheme]}
      >
        <Image source={icon} style={type === 'Facebook' ? styles.facebookIcon : styles.googleIcon} resizeMode="contain"/>
        <Text style={[styles.textContatiner, type === 'Facebook' ? styles.facebookTheme : styles.googleTheme]}>
          {type}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.Normal,
    marginVertical: Spacing.Normal,
  },
  textContatiner: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    paddingVertical: Spacing.Small,
    marginLeft: Spacing.Small,
  },
  facebookTheme: {
    color: '#39579A',
    backgroundColor: '#F1F7FF',
  },
  googleTheme: {
    color: '#FF7F75',
    backgroundColor: Colors.Red.lighter,
  },
  facebookIcon: {
    height: 18,
    marginHorizontal: -10,
  },
  googleIcon: {
    height: 18,
    marginHorizontal: -20,
  },
});

export default SocialButton;
