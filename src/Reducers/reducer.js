import { combineReducers } from 'redux';
import { jobReducer } from './data.reducers';


const rootReducer = combineReducers({
    data: jobReducer,
})

export default rootReducer;