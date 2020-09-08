import React from 'react';

const ProjectSummary = ({ data }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">{data.title}</div>
        <div className="card-body">{data.content}</div>
        <p>Posted by Net Ninja</p>
        <p className="grey-text">Date</p>
      </div>
    </div>
  );
}
 
export default ProjectSummary;