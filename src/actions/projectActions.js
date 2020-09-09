export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {   

    // make async call to firebase database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const author = getState().firebase.auth.uid;

    firestore.collection('projects').add({
      ...project, 
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: author,
      date: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project: project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', error: err })
    })
  }
}


// What we would do normally
// return {
//   type: 'ADD_PROJECT',
//   project: project
// }