import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Launch from '../screens/Launch';
import Walkthrough from '../screens/Walkthrough';
import Welcome from '../screens/Welcome';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Homepage from '../screens/Homepage';

const LoginStack = createStackNavigator({
  Welcome: Welcome,
  Login: Login,
  Signup: Signup,
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
});

const HomeStack = createStackNavigator({
  Homepage: Homepage,
}, {
  initialRouteName: 'Homepage',
  headerMode: 'none',
});

const LaunchStack = createSwitchNavigator({
  Launch: Launch,
  Walkthrough: Walkthrough,
  LoginStack: LoginStack,
  HomeStack: HomeStack,
}, {
  initialRouteName: 'LoginStack',
});

export default LaunchStack;
