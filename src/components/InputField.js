import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Colors, BorderRadius, Spacing, Fonts } from '../styles/variables';

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      hidePassword: true,
      error: '',
    };

    this.managePasswordVisibility = this.managePasswordVisibility.bind(this);
  }

  componentWillMount() {
    const { error } = this.props;
    this.setState({ error });
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps;
    if ( error !== this.state.error ) {
      this.setState({ error });
    }
  }

  getInputValue = () => this.state.text;

  managePasswordVisibility() {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    const { placeholder, keyboardType, secureTextEntry } = this.props;
    const { text, hidePassword, error  } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={[styles.inputText, error ? styles.containerError : {}]}
          value={text}
          placeholder={placeholder}
          placeholderTextColor={Colors.Grey.lighter}
          keyboardType={keyboardType}
          onChangeText={text => this.setState({ text, error: '' })}
          underlineColorAndroid='transparent'
          secureTextEntry={secureTextEntry && hidePassword}
          ref={ref => this.input = ref}
          autoCapitalize = 'none'
        />
        {secureTextEntry &&
          <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn }
            onPress = { this.managePasswordVisibility }>
            <Image source = { ( hidePassword ) ?require('../assets/image/eye_hide.png') :
              require('../assets/image/eye.png') } style = { styles.btnImage } />
          </TouchableOpacity>
        }
        {error !== '' &&
          <Text style={styles.errorText}>{error}</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  containerError: {
    borderColor: Colors.Red.main,
    borderWidth: 1,
  },
  inputText: {
    borderRadius: BorderRadius.Normal,
    shadowOffset:{  width: -10,  height: -10,  },
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    paddingHorizontal: Spacing.Medium,
    marginVertical: Spacing.Smaller,
    position: 'relative',
    borderWidth: 0,
    ...Fonts.Body1,
    color: Colors.Dark,
  },
  visibilityBtn: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: Spacing.Tiny,
    top: Spacing.Tiny,
  },
  btnImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  errorText: {
    ...Fonts.Body2,
    color: Colors.Red.main,
    marginLeft: Spacing.Medium,
    marginBottom: Spacing.Small,
  },
});

export default InputField;
