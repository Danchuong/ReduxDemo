import React, {Component} from 'react';
import {Provider} from 'react-redux';

import App from './main';

import configureStore from './redux/Store';
const store = configureStore();

class MyCounterApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default MyCounterApp;
