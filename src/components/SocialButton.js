import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { Colors, Spacing, BorderRadius } from '../styles/variables';
import firebase from 'react-native-firebase';

class SocialButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };

    this.onPress = this.onPress.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.facebookSignIn = this.facebookSignIn.bind(this);
  }

  onPress() {
    if (this.props.type === 'Google') {
      this.googleSignIn();
    } else if (this.props.type === 'Facebook') {
      this.facebookSignIn();
    }
  }

  googleSignIn = async () => {
    try {
      await GoogleSignin.configure();
      const data = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
      //console.log(JSON.stringify(firebaseUserCredential.user.toJSON()));
      this.setState({ data });
      this.props.navigation.navigate('HomeStack');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('-------------------------user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('-------------------------operation (f.e. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('-------------------------play services not available or outdated');
      } else if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('-------------------------play services needs signin');
      } else {
        console.log('-------------------------some other error happened');
      }
    }
  };

  facebookSignIn() {

  }
  
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
    fontFamily: 'SF Pro Text',
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
