import React from 'react';

const Voting = ({ link, onUpvote, onDownvote }) => (
  <div className="voting">
    <i className="fa fa-arrow-up" onClick={onUpvote}/>
    <div className="score">{link.score}</div>
    <i className="fa fa-arrow-down" onClick={onDownvote}/>
  </div>
);

export default Voting;
