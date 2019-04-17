import React from 'react';
import Link from './Link';
import './Link.css';

const Links = ({ feeds, onUpvote, onDownvote }) => (
  <ul className="links-listing">
    {feeds
      .sort((p1, p2) => p2.score - p1.score)
      .map(link =>
        <li key={link.id}>
          <Link link={link}
            onUpvote={onUpvote}
            onDownvote={onDownvote} />
        </li>
    )}
  </ul>
)

export default Links;