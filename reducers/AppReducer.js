import { combineReducers } from 'redux';
import { NameReducer } from './name/NameReducer';

export default combineReducers({
    name: NameReducer,
    // Add more reducers here.
});