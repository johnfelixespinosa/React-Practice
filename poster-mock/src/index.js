import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Poster from './components/poster';

var posterInfo = {
  image: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
  title: "React",
  caption: "The best thing since jQuery, probably."
};

ReactDOM.render(
  <Poster posterInfo={posterInfo}/>,
  document.getElementById('root')
);