import {combineReducers} from 'redux';
import testReducer from "../features/testarea/testReducer";


const rooReducer = combineReducers({
    test: testReducer
})

export default rooReducer;

