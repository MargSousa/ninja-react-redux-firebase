import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    const dummyProjects = this.props.projectsData;
    const { projectsNew, notifications, auth } = this.props;
    
    if(!auth.uid) { return <Redirect to='/signin' />};

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList data={projectsNew} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications data={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("store", state)
  return {
    projectsData: state.project.projects,
    projectsNew: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}


export default compose(
  firestoreConnect([
    { collection: 'projects', orderBy: ['date', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ]),
  connect(mapStateToProps)
)(Dashboard)