import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import TouchableText from '../components/TouchableText';
import SocialButtonContainer from '../components/SocialButtonContainer';
import { Spacing, Fonts, Colors } from '../styles/variables';

class Welcome extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.space} />
        <Image source={require('../assets/image/Logo.png')} resizeMode="contain" style={styles.image}/>
        <Text style={styles.title}>Welcome to Ecome</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut l
        </Text>
        <View style={styles.space} />
        <Button onPress={() => navigation.navigate('Login')}>Log in</Button>
        <Button type="white" onPress={() => navigation.navigate('Signup')}>Sign up</Button>
        <View style={styles.termsContainer}>
          <Text style={styles.terms}>By signup, I agree with</Text>
          <View style={styles.termLink}>
            <TouchableText>Terms of services</TouchableText>
          </View>
        </View>
        <SocialButtonContainer navigation={navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.Big,
  },
  space: {
    flex: 1,
  },
  image: {
    width: 105,
  },
  title: {
    ...Fonts.Heading2,
    color: Colors.Dark,
    marginVertical: Spacing.Smaller,
  },
  description: {
    ...Fonts.Body1,
    color: Colors.Grey.main,
    marginVertical: Spacing.Smaller,
  },
  termsContainer: {
    marginVertical: Spacing.Big,
  },
  terms: {
    textAlign: 'center',
    color: Colors.Grey.light,
  },
  termLink: {
    alignSelf: 'center',
    marginTop: -Spacing.Normal,
  }
});

export default Welcome;
