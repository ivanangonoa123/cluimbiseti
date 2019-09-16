import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home';
import MainScreen from './src/screens/Main';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Main: {screen: MainScreen},
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation
