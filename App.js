import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/home';
import MainScreen from './src/screens/main';

const MainNavigator = createStackNavigator({
  Main: {screen: MainScreen},
  Home: {screen: HomeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
