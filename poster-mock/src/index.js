import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Poster from './components/poster';

var posterInfo = {
  image: "https://www.universetoday.com/wp-content/uploads/2009/11/Apoll14_Shepard-e1435614695915.jpg",
  title: "ACHIEVMENT",
  caption: "This is one small step for man, one giant leap for manking. -Niel Armstrong"
};

ReactDOM.render(
  <Poster posterInfo={posterInfo}/>,
  document.getElementById('root')
);