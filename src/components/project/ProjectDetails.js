import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {

  const { projectData, auth } = props;

  if(!auth.uid) { return <Redirect to='/signin' />};

  return (
    <div className="container section project-details">
      { projectData ? 
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{projectData.title}</div>
            <p>{projectData.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by {projectData.authorFirstName} {projectData.authorLastName}</div>
            <div>Date</div>
          </div>
        </div>
        :
        <div className="container center">
          <p>Loading project....</p>
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    projectData: project,
    auth: state.firebase.auth
  }
}
 
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)