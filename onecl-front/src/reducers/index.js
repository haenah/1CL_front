import SignUpValidation from './SignUpValidation';
import {combineReducers} from "redux";

const reducers = combineReducers({
    SignUpValidationData: SignUpValidation
})

export default reducers;
