import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstagramMock from './components/InstagramMock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="instagram-mock-container">
          <InstagramMock postInfo={postInfo2}/>
        </div>
      </div>
    );
  }
}

var postInfo = {
  username: "j0hneb0y",
  userIconImage: "https://scontent-iad3-1.cdninstagram.com/vp/156bfd877ed15f12f3ba330cfafea620/5D2F09DC/t51.2885-19/s150x150/32443521_264070094162094_1087072826961166336_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
  clockImage: "https://github.com/gxespino/PosterLuv/blob/master/public/images/watch-1.png?raw=true",
  timeAgo: "5w",
  image: "https://scontent-iad3-1.cdninstagram.com/vp/a049602017b09052a3a70e8a254857c5/5D3289C0/t51.2885-15/e15/53931055_183735155926123_3932389482563511181_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
  likes: "276",
  heart: "https://github.com/gxespino/PosterLuv/blob/master/public/images/heart-black-shape-for-valentines.png?raw=true",
  username2: "richardprine123",
  comment: "You still lookin just as good! ",
  atUser: "@tonybalony"
};

var postInfo2 = {
  username: "KingRichard123",
  userIconImage: "https://scontent-iad3-1.cdninstagram.com/vp/8c7bb47fe17804e722298974b68bf920/5D2A9274/t51.2885-19/s150x150/31997982_214957549289257_7331486359405723648_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
  clockImage: "https://github.com/gxespino/PosterLuv/blob/master/public/images/watch-1.png?raw=true",
  timeAgo: "32w",
  image: "https://scontent-iad3-1.cdninstagram.com/vp/c1469ac21afa07e422ab7b628d739d3b/5D40F5FB/t51.2885-15/e35/53884445_158219205180450_5153820887429377161_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
  likes: "1021",
  heart: "https://github.com/gxespino/PosterLuv/blob/master/public/images/heart-black-shape-for-valentines.png?raw=true",
  username2: "richardprine123",
  comment: "You still lookin just as good! ",
  atUser: "@tonybalony"
};

export default App;
