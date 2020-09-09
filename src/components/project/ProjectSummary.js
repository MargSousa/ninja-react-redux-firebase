import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ data }) => {

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">{data.title}</div>
        <div className="card-body">{data.body}</div>
        <p>Posted by {data.authorFirstName} {data.authorLastName}</p>
        <p className="grey-text">{moment(data.date.toDate()).calendar()}</p>
      </div>
    </div>
  );
}
 
export default ProjectSummary;