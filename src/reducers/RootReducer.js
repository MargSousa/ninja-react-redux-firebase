import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  project: projectReducer,
  auth: authReducer,
  firestore: firestoreReducer
});

export default rootReducer;