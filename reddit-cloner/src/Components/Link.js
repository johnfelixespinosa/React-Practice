import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import Voting from './Voting';
import Time from './Time';

export default class Link extends Component {

  handleUpvoteClick = () => {
    this.props.onUpvote(this.props.link.id);
  }

  handleDownvoteClick = () => {
    this.props.onDownvote(this.props.link.id);
  }

  render() {
    const { link } = this.props;

    return (
      <div className="reddit-link">
        <Voting link={link}
          onUpvote={this.handleUpvoteClick}
          onDownvote={this.handleDownvoteClick} />
        <Thumbnail link={link} />
        <div className="content">
          <h3 className="title">
            <a href={link.url}>{link.title}</a>
          </h3>
          <div className="submitted">
            Submitted <Time time={link.created} isUnixTime={true}/>
          </div>
          <a className="comments" href={`https://www.reddit.com${link.permalink}`}>
            {link.num_comments} comments
          </a>
          <span className="action"> share </span>
          <span className="action"> save </span>
          <span className="action"> hide </span>
        </div>
      </div>
    )
  }
}
