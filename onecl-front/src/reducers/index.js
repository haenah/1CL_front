import SignUpValidation from './SignUpValidation';
import {combineReducers} from "redux";
import Login from "./Login";

const reducers = combineReducers({
    SignUpValidationData: SignUpValidation,
    Login,
})

export default reducers;
