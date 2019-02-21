import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Launch from './screens/Launch';

const AuthStack = createSwitchNavigator(
  {
    Launch: Launch,
  },
  {
    initialRouteName: 'Launch'
  }
)

const App = createAppContainer(AuthStack);
export default App;
