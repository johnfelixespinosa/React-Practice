import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstagramMock from './components/InstagramMock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="instagram-mock-container">
          <InstagramMock postInfo={postInfo}/>
        </div>
      </div>
    );
  }
}

var postInfo = {
  username: "WilliamClinton",
  userIconImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/1200px-Bill_Clinton.jpg",
  clockImage: "https://github.com/gxespino/PosterLuv/blob/master/public/images/watch-1.png?raw=true",
  timeAgo: "5w",
  image: "https://us.hola.com/en/imagenes/celebrities/2018060412125/bill-clinton-monica-lewinsky-scandal-metoo/0-26-733/bill-clinton-monica-lewinsky-z.jpg",
  likes: "3276",
  heart: "https://github.com/gxespino/PosterLuv/blob/master/public/images/heart-black-shape-for-valentines.png?raw=true",
  username2: "WilliamClinton",
  comment: " Met one of the new interns today!"
};

export default App;
