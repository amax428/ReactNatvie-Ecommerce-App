import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Colors, BorderRadius, Spacing, Fonts } from '../styles/variables';

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  getInputValue = () => this.state.text;

  render() {
    const { error, placeholder, keyboardType, secureTextEntry } = this.props;
    const { text } = this.state;
    return (
      <View style={[styles.container, error ? styles.containerError : {}]}>
        <TextInput
          style={styles.inputText}
          value={text}
          placeholder={placeholder}
          placeholderTextColor={Colors.Grey.lighter}
          keyboardType={keyboardType}
          onChangeText={text => this.setState({ text })}
          underlineColorAndroid='transparent'
          secureTextEntry={secureTextEntry}
          ref={ref => this.input = ref}
          autoCapitalize = 'none'
          clearButtonMode="while-editing"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.Normal,
    shadowOffset:{  width: -10,  height: -10,  },
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    paddingHorizontal: Spacing.Medium,
    marginVertical: Spacing.Smaller,
  },
  containerError: {

  },
  inputText: {
    ...Fonts.Body1,
    color: Colors.Dark,
  },
});

export default InputField;
