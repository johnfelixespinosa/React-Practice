import React, { Component } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';

class App extends Component {
  render() {
    return (
      <div className='image-card-list'>
        <ImageCard />
      </div>
    );
  }
}

export default App;
