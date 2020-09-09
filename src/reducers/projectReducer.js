const initialState = {
  projects: [
    { id: '1', title: 'Project 1', content: 'Content 1' },
    { id: '2', title: 'Project 2', content: 'Content 2' },
    { id: '3', title: 'Project 3', content: 'Content 3' }
  ]
}

const projectReducer = (state = initialState , action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log("create")
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log("create error")
      return state;
    default:
      return state
  }
}

export default projectReducer;