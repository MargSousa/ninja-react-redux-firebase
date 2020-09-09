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
    case 'SIGNUP_SUCCESS':
      console.log("sign OK")
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR':
      console.log("signup ERROR")
      return {
        ...state,
        authError: action.error.message
      };
    default:
      return state
  }
}

export default authReducer;