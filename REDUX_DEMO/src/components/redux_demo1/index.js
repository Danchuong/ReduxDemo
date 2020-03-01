import React from 'react';
import App from './main';
import App2 from './main2';
import {Provider} from 'react-redux';

import configureStore from './redux/Store';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
    <App2 />
  </Provider>
);

export default RNRedux;
