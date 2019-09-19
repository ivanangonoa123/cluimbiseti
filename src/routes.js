import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home';
import MainScreen from './screens/main';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Main: {screen: MainScreen},
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation
