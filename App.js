import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/configureStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faCookie, faFish, faPizzaSlice, faAppleAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes, faCookie, faFish, faPizzaSlice, faAppleAlt)

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
