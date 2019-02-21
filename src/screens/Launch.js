import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../styles/variables';

class Launch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timePassed: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {this.setState({timePassed: true})}, 2000);
  }

  render() {
    const { timePassed } = this.state;
    const { navigate} = this.props.navigation;

    if (timePassed) {
      navigate('Walkthrough');
    }

    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[Colors.GradientDeep.dark, Colors.GradientDeep.light]}
          style={styles.linearGradient}
        >
          <Image source={require('../assets/image/Logo.png')}></Image>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Launch;
