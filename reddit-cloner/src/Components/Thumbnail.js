import React from 'react';

const Thumbnail = ({ link }) => {
  if(link.is_self) {
    return <span className="thumbnail self"/>
  } else if(link.thumbnail === 'default') {
    return <span className="thumbnail default"/>
  } else {
    return (
      <img className="thumbnail"
        alt="thumbnail"
        src={link.thumbnail} />
    );
  }
};

export default Thumbnail;
