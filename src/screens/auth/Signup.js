import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackHeader from '../../components/BackHeader';
import Button from '../../components/Button';
import SocialButtonContainer from '../../components/SocialButtonContainer';
import TouchableText from '../../components/TouchableText';
import InputField from '../../components/InputField';
import { Spacing, Fonts, Colors } from '../../styles/variables';
import Firebase from '../../services/api';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNameCorrect: false,
      isEmailCorrect: false,
      isPasswordCorrect: false,
      isRepeatCorrect: false,
      isCreatingAccount: false,
    };

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup() {
    const name = this.name.getInputValue();
    const email = this.email.getInputValue();
    const password = this.password.getInputValue();
    const repeat = this.repeat.getInputValue();

    this.setState({
      isNameCorrect: name === '',
      isEmailCorrect: email === '',
      isPasswordCorrect: password === '',
      isRepeatCorrect: repeat === '' || repeat !== password,
    }, () => {
      if(name !== '' && email !== '' && password !== '' && (repeat !== '' && repeat === password)){
        this.createFireBaseAccount(name, email, password);
      } else {
        console.warn('Fill up all fields correctly');
      }
    });
  }

  createFireBaseAccount = (name, email, password) => {
    this.setState({ isCreatingAccount: true });
    Firebase.createFirebaseAccount(name, email, password)
      .then(result => {
        if(result) this.props.navigation.navigate('HomeStack');
        this.setState({ isCreatingAccount: false });
      });
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView contentContainerStyle={{flex:1}}>
        <View  style={styles.container}>
          <BackHeader navigation={navigation} />
          <View style={styles.space} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Signup</Text>
          </View>
          <View style={styles.space} />
          <InputField
            placeholder="User name"
            keyboardType="email-address"
            ref={ref => this.name = ref}
          />
          <InputField
            placeholder="Email or phone number"
            keyboardType="email-address"
            ref={ref => this.email = ref}
          />
          <InputField
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
            ref={ref => this.password = ref}
          />
          <InputField
            placeholder="Confirm password"
            returnKeyType="done"
            secureTextEntry={true}
            ref={ref => this.repeat = ref}
          />
          <Button onPress={this.handleSignup}>Sign up</Button>
          <View style={[styles.paddingL, styles.signup]}>
            <Text style={styles.question}>I already have account?</Text>
            <TouchableText onPress={() => navigation.navigate('Login')}>Log in</TouchableText>
          </View>
          <View style={styles.space} />
          <SocialButtonContainer />
        </View>
      </ScrollView>
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

export default Signup;
