import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackHeader from '../../components/BackHeader';
import Button from '../../components/Button';
import SocialButtonContainer from '../../components/SocialButtonContainer';
import TouchableText from '../../components/TouchableText';
import InputField from '../../components/InputField';
import { Spacing, Fonts, Colors } from '../../styles/variables';

class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <BackHeader navigation={navigation} />
        <View style={styles.space} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.description}>Please log in to your account</Text>
        </View>
        <View style={styles.space} />
        <InputField
          placeholder="Email or phone number"
          keyboardType="email-address"
        />
        <View style={styles.paddingL}>
          <TouchableText>Forgot password?</TouchableText>
        </View>
        <Button>Log in</Button>
        <View style={[styles.paddingL, styles.signup]}>
          <Text style={styles.question}>I don't have account?</Text>
          <TouchableText>Sign up now</TouchableText>
        </View>
        <View style={styles.space} />
        <SocialButtonContainer />
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
  title: {
    ...Fonts.Heading2,
    color: Colors.Dark,
  },
  description: {
    ...Fonts.Body1,
    color: Colors.Grey.main,
  },
  titleContainer: {
    marginVertical: Spacing.Big,
  },
  question: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: Colors.Grey.light,
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paddingL: {
    paddingHorizontal: Spacing.Normal,
  },
});

export default Login;
