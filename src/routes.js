import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home';
import MainScreen from './screens/main';

const MainNavigator = createStackNavigator({
  Main: {screen: MainScreen},
  Home: {screen: HomeScreen},
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation
