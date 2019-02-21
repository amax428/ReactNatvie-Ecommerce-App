import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, Spacing, Fonts, BorderRadius } from '../styles/variables';

class Button extends Component {
  render() {
    const {
      children,
      onPress,
      disabled,
      type,
    } = this.props;

    return (
      <TouchableOpacity
        onPress={disabled ? undefined : onPress}
      >
        <Text style={[styles.buttonContatiner, type === 'white' ? styles.whiteTheme : styles.blueTheme]}>{children.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContatiner: {
    ...Fonts.Button2,
    textAlign: 'center',
    marginHorizontal: Spacing.Big,
    paddingVertical: Spacing.Small,
    borderColor: Colors.Accent.main,
    borderWidth: 1,
    borderRadius: BorderRadius.Normal,
    marginVertical: Spacing.Smaller,
  },
  blueTheme: {
    color: Colors.White,
    backgroundColor: Colors.Accent.main,
  },
  whiteTheme: {
    color: Colors.Accent.main,
    backgroundColor: Colors.White,
  },
});

export default Button;
