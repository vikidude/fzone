import { combineReducers } from 'redux';
import WorkoutReducer from './workout/reducer';
import AuthReducer from './auth/reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    WorkoutReducer,
    AuthReducer
});
// Exports
export default rootReducer;