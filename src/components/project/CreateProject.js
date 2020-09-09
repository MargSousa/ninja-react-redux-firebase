import React from 'react';
import { createProject } from '../../actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateProject extends React.Component {
  state = {
    title: '',
    content: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createProject(this.state)
    this.props.history.push('/')
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  render() { 

    if(!this.props.auth.uid) { return <Redirect to='/signin' />};
    
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text-text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input  type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => (dispatch(createProject(project)))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);