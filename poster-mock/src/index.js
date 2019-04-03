import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function Poster({ posterInfo }) {
  var { image, title, caption } = posterInfo;

  return (
    <div className='poster'>
      <div className='image-container'>
        <img alt='Poster' src={image}/>
      </div>
      <div className='title-container'>
        <span className='title'>
          {title}
        </span>
      </div>
      <div className='caption'>
        {caption}
      </div>
    </div>
  );
}
Poster.propTypes = {
  posterInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
  }).isRequired
};

var posterInfo = {
  image: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
  title: "React",
  caption: "The best thing since jQuery, probably."
};

ReactDOM.render(
  <Poster posterInfo={posterInfo} />, 
  document.getElementById('root')
);


