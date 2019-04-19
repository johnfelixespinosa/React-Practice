import React, { Component } from 'react';
import './App.css';
import ActivitiesContainer from './containers/ActivitiesContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Activities List</h1>
        </div>
        <ActivitiesContainer />
      </div>
    );
  }
}

export default App;