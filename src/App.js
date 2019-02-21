import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Launch from './screens/Launch';
import Walkthrough from './screens/Walkthrough';

const AuthStack = createSwitchNavigator(
  {
    Launch: Launch,
    Walkthrough: Walkthrough,
  },
  {
    initialRouteName: 'Launch'
  }
)

const App = createAppContainer(AuthStack);
export default App;
