import React, { Component } from 'react';
import { ConfigureStore } from './redux/ConfigureStore';

import { Provider } from 'react-redux';
import MainComponent from './src/components/MainComponent';

const store = ConfigureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainComponent />
      </Provider>
    );
  }
}
