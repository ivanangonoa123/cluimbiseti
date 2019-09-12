import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/Home';
import MainScreen from './src/screens/Main';
import rootReducer from './src/store/reducers'

const MainNavigator = createStackNavigator({
  Main: {screen: MainScreen},
  Home: {screen: HomeScreen},
});

const Navigation = createAppContainer(MainNavigator);

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
};
