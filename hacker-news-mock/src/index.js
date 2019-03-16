import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';

const ThreadList = ({ threads }) => (
  <table className='thread-list'>
    <tbody>
      {threads.map(thread =>
        <ThreadListItem key={thread.id} thread={thread}/>
      )}
    </tbody>
  </table>
);
ThreadList.propTypes = {
  threads: PropTypes.array
};

const ThreadListItem = ({ thread }) => (
  <tr className='thread-list-item'>
    <ThreadTitle thread={thread}/>
    <ThreadLink thread={thread}/>
  </tr>
)
ThreadListItem.propTypes = {
  thread: PropTypes.object.isRequired
}

const ThreadTitle = ({ thread }) => (
  <div className='thread-title'>
    {thread.title}
  </div>
)
ThreadTitle.propTypes = {
  thread: PropTypes.object.isRequired
}

const ThreadLink = ({ thread }) => (
  <div className='thread-title'>
    ({thread.link})
  </div>
)
ThreadLink.propTypes = {
  thread: PropTypes.object.isRequired
}

const sampleThreads = [
  {
    id: 1,
    title: "Why I'm Suing the Government",
    link: 'bunnieststudio.com',
    user: 'ivank',
    points: 4213,
    updated_at: "2019-01-11 21:24:00", 
  },
  {
    id: 2,
    title: "Google API tricks",
    link: 'google.com',
    user: 'stevejobs',
    points: 321,
    updated_at: "2012-01-11 21:24:00", 
  },
  {
    id: 3,
    title: "Our Addiction to Social media and how to cultivate it.",
    link: 'cerealkiller.com',
    user: 'mickjones',
    points: 1241,
    updated_at: "2019-02-11 21:24:00", 
  },
  {
    id: 4,
    title: "The Government is suing the people",
    link: 'tiggerstudio.com',
    user: 'kivan',
    points: 12,
    updated_at: "2018-01-11 21:24:00", 
  },
  {
    id: 5,
    title: "Had VR gone to far? A study on VR toilets",
    link: 'lastminute.com',
    user: 'wildon12',
    points: 876,
    updated_at: "2017-01-11 21:24:00", 
  }

]

ReactDOM.render(
  <ThreadList threads={sampleThreads}/>,
  document.querySelector('#root')
);

export default ThreadList;
