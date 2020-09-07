import React from 'react';

const ProjectDetails = (props) => {
  
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Title - {id}</div>
          <p>TEXT TEXT TEXT</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectDetails;