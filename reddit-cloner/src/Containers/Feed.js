import React, {Component} from 'react';
import Links from '../Components/Links';

export default class Feed extends Component {
  state = {
    feeds: {}
  };

  componentDidMount() {
    // To use static data, uncomment this line:
    // this.processPosts(reactjsPosts.data.children);

    // To fetch live data from Reddit, use this block of code:
    fetch('http://www.reddit.com/r/reactjs.json')
      .then(res => res.json())
      .then(json => this.processFeeds(json.data.children))
      .catch(err => console.log(err));
  }

  processFeeds = (feeds) => {
    // Make the data nicer to work with
    let feedsHash = feeds.reduce((hash, link) => {
      hash[link.data.id] = link.data;
      return hash;
    }, {});

    this.setState({
      feeds: feedsHash
    });
  }

  handleUpvote = (linkId) => {
    // Immutably update the post:
    this.setState({
      // Set 'posts' to...
      feeds: {
        // Every existing post, but then...
        ...this.state.feeds,
        // Replace the one at 'postId' with...
        [linkId]: {
          // All the keys/values it originally had, but...
          ...this.state.feeds[linkId],
          // Replace its 'score' with a new value
          score: this.state.feeds[linkId].score + 1
        }
      }
    });
  }

  handleDownvote = (linkId) => {
    // Immutably update the post:
    this.setState({
      // Set 'posts' to...
      feeds: {
        // Every existing post, but then...
        ...this.state.feeds,
        // Replace the one at 'postId' with...
        [linkId]: {
          // All the keys/values it originally had, but...
          ...this.state.feeds[linkId],
          // Replace its 'score' with a new value
          score: this.state.feeds[linkId].score - 1
        }
      }
    });
  }

  render() {
    const feeds = Object.keys(this.state.feeds)
      .map(id => this.state.feeds[id]);

    return (
      <Links 
        feeds={feeds} 
        onUpvote={this.handleUpvote}
        onDownvote={this.handleDownvote} 
      />
    );
  }
}
