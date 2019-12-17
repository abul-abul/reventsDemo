import {combineReducers} from 'redux';
import testReducer from "../features/testarea/testReducer";
import eventReducer from "../features/event/eventReducer";


const rooReducer = combineReducers({
    test: testReducer,
    events:eventReducer
})

export default rooReducer;

