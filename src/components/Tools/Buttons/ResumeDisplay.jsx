import React from 'react';
import PropTypes from 'prop-types';
import './ResumeDisplay.css'; // Assuming your CSS file is named ResumeDisplay.css

const ResumeDisplay = ({ resume, layout }) => {
  return (
    <div className={`resume-display ${layout === MODERN_LAYOUT ? 'modern-layout' : 'classic-layout'}`}>
      {layout === MODERN_LAYOUT ? (
        <><div className="resume-content">
          <h1>{resume.name}</h1>
          <p>{resume.experience}</p>
          {/* Add more sections for the first side */}
        </div><div className="resume-content">
            <h2>Additional Info</h2>
            <p>{resume.skills}</p>
            {/* Add more sections for the second side */}
          </div></>
      ) : (
        <div className="resume-content">
          <h1>{resume.name}</h1>
          <p>{resume.experience}</p>
          <h2>Additional Info</h2>
          <p>{resume.skills}</p>
          {/* Add more sections for classic layout */}
        </div>
      )}
    </div>
  );
};

ResumeDisplay.propTypes = {
  resume: PropTypes.object.isRequired,
  layout: PropTypes.number.isRequired,
};

export default ResumeDisplay;
