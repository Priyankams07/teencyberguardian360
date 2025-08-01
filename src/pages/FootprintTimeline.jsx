import React from 'react';
import './FootprintTimeline.css';

const timelineEvents = [
  {
    year: 'Age 13',
    title: 'Posted a Silly Meme with Personal Info',
    description: 'Shared school name and photo without privacy settings.',
  },
  {
    year: 'Age 15',
    title: 'Cyberbullying Incident',
    description: 'Comment caused hurt. Got reported and faced school inquiry.',
  },
  {
    year: 'Age 17',
    title: 'College Application Reviewed',
    description: 'Admissions team found old public post — not ideal impression.',
  },
  {
    year: 'Age 20',
    title: 'Job Interview',
    description: 'Recruiter viewed digital footprint — discussed inappropriate posts.',
  },
  {
    year: 'Age 25',
    title: 'Public Speaking Opportunity',
    description: 'Declined due to controversial post history found online.',
  },
];

const FootprintTimeline = () => {
  return (
    <div className="timeline-container">
      <h1>Digital Footprint Time Machine</h1>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h2>{event.year}</h2>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootprintTimeline;