import React, { Component } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import './App.css';
import { Sidebar } from './containers/Sidebar';
import { MessagesList } from './containers/MessagesList';
import { AddMessage } from './containers/AddMessage';

class App extends Component {
  render() {
    return (
      <div id='container'>
        <Sidebar/>
        <section id='main'>
          <MessagesList/>
          <AddMessage/>
        </section>
      </div>
    );
  }
}

export default App;
