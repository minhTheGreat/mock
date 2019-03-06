import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authentication from '../reducers/authReducer';
const rootReducer=combineReducers({
    authentication,
    form:formReducer
});
export default rootReducer;