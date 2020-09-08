import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ data }) => {

  return ( 
    <div className="project-list section">
      {data && data.map( project => <ProjectSummary key={project.id} data={project} /> )}
    </div>
   );
}
 
export default ProjectList;