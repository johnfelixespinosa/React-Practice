import React from 'react';
import TimelineItem from '../Components/TimelineItem';
import './Timeline.css'

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

    const timelineData = [
      {
        text: 'Got accepted into Flatiron online web developer program',
        date: 'March 03 2016',
        category: {
            tag: 'Bootcamp',
            color: '#018f69'
        },
        link: {
            url:
                'http://johnfelixespinosa.github.io/johnfelixespinosa.github.io/2016-04-11-Acceptance-Into-Learn-Verified/',
            text: 'Read more'
        }
      },
      {
        text: 'Submitted my Rails with Javascript application and passed!',
        date: 'December 29 2018',
        category: {
            tag: 'Bootcamp',
            color: '#018f69'
        },
        link: {
            url:
                'http://johnfelixespinosa.github.io/johnfelixespinosa.github.io/2019-03-04-JS-Fundamentals/',
            text: 'Read more'
        }
      }
    ]
    
export default Timeline;