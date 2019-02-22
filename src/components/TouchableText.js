import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Spacing, Fonts, BorderRadius } from '../styles/variables';

class TouchableText extends Component {
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
        style={styles.container}
      >
        <Text style={[styles.textContatiner, type === 'bold' ? styles.boldTheme : styles.normalTheme]}>
          {type === 'bold' ? children.toUpperCase() : children}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  textContatiner: {
    color: Colors.Accent.main,
    marginVertical: Spacing.Smaller,
    paddingVertical: Spacing.Small,
  },
  boldTheme: {
    ...Fonts.Button2,
  },
  normalTheme: {
    ...Fonts.Body2,
  }
});

export default TouchableText;
