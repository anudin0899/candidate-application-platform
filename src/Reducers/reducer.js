import { combineReducers } from 'redux';
import { jobReducer } from './data.reducers';
import { filterReducer } from './filterData.reducers';


const rootReducer = combineReducers({
    jobdata: jobReducer,
    filterData:filterReducer,
})

export default rootReducer;