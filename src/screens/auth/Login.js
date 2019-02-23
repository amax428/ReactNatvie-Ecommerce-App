import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackHeader from '../../components/BackHeader';
import Button from '../../components/Button';
import SocialButtonContainer from '../../components/SocialButtonContainer';
import TouchableText from '../../components/TouchableText';
import InputField from '../../components/InputField';
import { Spacing, Fonts, Colors } from '../../styles/variables';
import Firebase from '../../services/api';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: '',
      passwordError: '',
      isLogin: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const email = this.email.getInputValue();
    const password = this.password.getInputValue();

    if (email === '') {
      this.setState({ emailError: 'Please type email'});
    } else {
      this.setState({ emailError: ''});
    }

    if (password === '') {
      this.setState({ passwordError: 'Please type password'});
    } else {
      this.setState({ passwordError: ''});
    }

    if(email !== '' && password !== '') {
      this.loginToFireBase(email, password);
    }
  }

  loginToFireBase = (email, password) => {
    this.setState({ isLogin: true });
    Firebase.userLogin(email, password)
      .then(user => {
        if(user) {
          console.log(JSON.stringify(user));
          this.props.navigation.navigate('HomeStack');
        }
        this.setState({ isLogin: false });
        console.log('*****************************')
      }).catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.setState({ emailError: 'Please type a correct email address'});
            break;
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            console.warn('Invalid email address or password');
            break;
          default:
            console.warn('Check your internet connection');
        }
      });
  };

  render() {
    const { navigation } = this.props;
    const { emailError, passwordError } = this.state;

    return (
      <ScrollView style={styles.scrollviewContainer}>
        <View style={styles.container}>
          <BackHeader navigation={navigation} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.description}>Please log in to your account</Text>
          </View>
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
          <View style={styles.paddingL}>
            <TouchableText>Forgot password?</TouchableText>
          </View>
          <Button onPress={this.handleLogin}>Log in</Button>
          <View style={[styles.paddingL, styles.signup]}>
            <Text style={styles.question}>I don't have account?</Text>
            <TouchableText onPress={() => navigation.navigate('Signup')}>Sign up now</TouchableText>
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
    paddingVertical: Spacing.Big,
  },
  question: {
    fontFamily: 'SF Pro Text',
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
