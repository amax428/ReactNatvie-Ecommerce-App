import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouchableText from '../components/TouchableText';

class Homepage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Homepage</Text>
        <TouchableText onPress={() => navigation.navigate('Login')}>Back to login</TouchableText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Homepage;
