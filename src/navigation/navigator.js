import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Launch from '../screens/Launch';
import Walkthrough from '../screens/Walkthrough';
import Welcome from '../screens/Welcome';
import Login from '../screens/auth/Login';

const LoginStack = createStackNavigator({
  Welcome: Welcome,
  Login: Login,
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
});

const LaunchStack = createSwitchNavigator({
  Launch: Launch,
  Walkthrough: Walkthrough,
  LoginStack: LoginStack,
}, {
  initialRouteName: 'LoginStack',
});

export default LaunchStack;
