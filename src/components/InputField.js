import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Colors, BorderRadius } from '../styles/variables';

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    const { error, placeholder, keyboardType } = this.props;
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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.Normal,
    shadowOffset:{  width: 30,  height: 30,  },
    shadowColor: Colors.Dark,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
  },
  containerError: {

  },
  inputText: {

  },
});

export default InputField;
