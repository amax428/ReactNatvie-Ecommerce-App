import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SocialButton from './SocialButton';
import { Colors } from '../styles/variables';

class SocialButtonContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.socialLogin}>OR LOG IN WITH</Text>
        <View style={styles.socialButtonContainer}>
          <SocialButton type="Facebook" />
          <SocialButton type="Google" />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
  },
  socialButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialLogin: {
    textAlign: 'center',
    fontFamily: 'SF-Pro-Text-Semibold',
    fontSize: 12,
    color: Colors.Grey.light,
  },
});

//make this component available to the app
export default SocialButtonContainer;
