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
      nameError: '',
      emailError: '',
      passwordError: '',
      repeatError: '',
      isCreatingAccount: false,
    };

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup() {
    const name = this.name.getInputValue();
    const email = this.email.getInputValue();
    const password = this.password.getInputValue();
    const repeat = this.repeat.getInputValue();

    if (name === '') {
      this.setState({ nameError: 'Please type user name'});
    } else {
      this.setState({ nameError: ''});
    }

    if (password === '') {
      this.setState({ passwordError: 'Please type password'});
    } else {
      this.setState({ passwordError: ''});
    }

    if (email === '') {
      this.setState({ emailError: 'Please type email'});
    } else {
      this.setState({ emailError: ''});
    }

    if (repeat === '' || repeat !== password) {
      this.setState({ repeatError: 'Password dismatch'});
    } else {
      this.setState({ repeatError: ''});
    }

    if(name !== '' && email !== '' && password !== '' && (repeat !== '' && repeat === password)){
      this.createFireBaseAccount(name, email, password);
    }
  }

  createFireBaseAccount = (name, email, password) => {
    this.setState({ isCreatingAccount: true });
    Firebase.createFirebaseAccount(name, email, password)
      .then(result => {
        if(result) this.props.navigation.navigate('HomeStack');
        this.setState({ isCreatingAccount: false });
      }).catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.setState({ emailError: 'This email address is already taken'});
            break;
          case 'auth/invalid-email':
            this.setState({ emailError: 'Please type a correct email address'});
            break;
          case 'auth/weak-password':
            this.setState({ passwordError: 'Password is too weak'});
            break;
          default:
            console.warn('Check your internet connection');
        }
      });
  };

  render() {
    const { navigation } = this.props;
    const { nameError, emailError, passwordError, repeatError } = this.state;

    return (
      <ScrollView style={styles.scrollviewContainer}>
        <View  style={styles.container}>
          <BackHeader navigation={navigation} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Signup</Text>
          </View>
          <InputField
            placeholder="User name"
            keyboardType="email-address"
            error={nameError}
            ref={ref => this.name = ref}
          />
          <InputField
            placeholder="Email or phone number"
            keyboardType="email-address"
            error={emailError}
            ref={ref => this.email = ref}
          />
          <InputField
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
            error={passwordError}
            ref={ref => this.password = ref}
          />
          <InputField
            placeholder="Confirm password"
            returnKeyType="done"
            secureTextEntry={true}
            error={repeatError}
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
  scrollviewContainer: {
    flex: 1,
  },
  container: {
    margin: Spacing.Big,
  },
  title: {
    ...Fonts.Heading2,
    color: Colors.Dark,
    marginVertical: Spacing.Small,
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
