import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends React.Component {

  render() {
    //const dummyProjects = this.props.projectsData;
    const getProjects = this.props.projectsNew;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList data={getProjects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //projectsData: state.project.projects,
    projectsNew: state.firestore.ordered.projects
  }
}


export default compose(
  firestoreConnect([
    { collection: 'projects' }
  ]),
  connect(mapStateToProps)
)(Dashboard)