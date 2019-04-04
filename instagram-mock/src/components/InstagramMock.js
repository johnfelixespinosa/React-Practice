import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './instagrammock.css';

function InstagramMock({ postInfo }) {
  var {
    userIconImage,
    clockImage,
    username,
    timeAgo,
    image,
    likes,
    heart,
    username2,
    comment
  } = postInfo;

  return (
    <div className="column w-col w-col-7 w-col-small-small-stack w-col-stack">
      <div className="preview-container">
        <div className="poster-container">
          <div className="poster-top w-clearfix">
            <div className="poster-user-icon">
              <img src={userIconImage} width="40" className="image-2" id="profile-pic" />
              <p className="blue instagram-poster-top" id="username">{username}</p>
            </div>
            <div className="poster-top-time">
              <img src={clockImage} width="12"/>
              <p className="instagram-poster-top small-left-margin" id="weeks-ago">{timeAgo}</p>
            </div>
          </div>
          <div className="poster-image">
            <img src={image} sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 395.1875px, 28vw" id="display-pic"/>
          </div>
          <div className="poster-bottom">
            <div className="likes-div">
              <img src={heart} width="15"/>
              <p className="instagram-text likes" id="like-count">{likes} likes</p>
            </div>
            <div className="poster-text" id="poster-text-caption">
              <p className="instagram-text">
                <span className="username">{username2}</span>
                  {comment}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}
InstagramMock.propTypes = {
          postInfo: PropTypes.shape({
          username: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      }).isRequired
    };
    
export default InstagramMock
    
