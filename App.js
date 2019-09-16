import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
};
