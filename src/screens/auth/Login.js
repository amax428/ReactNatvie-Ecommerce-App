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

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const email = this.email.getInputValue();
    const password = this.password.getInputValue();

    this.setState({
      isEmailCorrect: email === '',
      isPasswordCorrect: password === '',
    }, () => {
      if(email !== '' && password !== ''){
        this.loginToFireBase(email, password);
      } else {
        console.warn('Fill up all fields')
      }
    });
  }

  loginToFireBase = (email, password) => {
    this.setState({ isLogin: true });
    Firebase.userLogin(email, password)
      .then(user => {
        if(user) //this.props.success(user); 
        {
          console.log(JSON.stringify(user));
        }
        this.setState({ isLogin: false });
        console.log('*****************************')
        this.props.navigation.navigate('Welcome');
      })
      .catch(console.log("____________FAILED__________________"))
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView contentContainerStyle={{flex:1}}>
        <View  style={styles.container}>
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
            ref={ref => this.email = ref}
          />
          <InputField
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
            ref={ref => this.password = ref}
          />
          <View style={styles.paddingL}>
            <TouchableText>Forgot password?</TouchableText>
          </View>
          <Button onPress={this.handleLogin}>Log in</Button>
          <View style={[styles.paddingL, styles.signup]}>
            <Text style={styles.question}>I don't have account?</Text>
            <TouchableText>Sign up now</TouchableText>
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

export default Login;
