const initialState = [];

const authReducer = (state = initialState , action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log("login ERROR")
      return {
        ...state,
        authError: 'Login Failed'
      };
    case 'LOGIN_SUCCESS':
      console.log("login OK")
      return {
        ...state,
        authError: null
      };
    case 'LOGOUT_SUCCESS':
      console.log("logout OK")
      return state
    default:
      return state
  }
}

export default authReducer;