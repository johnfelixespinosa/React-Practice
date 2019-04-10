import React, { Component } from 'react';
import './App.css';
import Image from './Component/Image';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageImages from './Reducers/manageImages';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Image/>
      </Provider>
    );
  }
}



const store = createStore(manageImages);

export default App;
