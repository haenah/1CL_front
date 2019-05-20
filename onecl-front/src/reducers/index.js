import SignUpValidation from './SignUpValidation';
import ClubSearch from './ClubSearch';
import {combineReducers} from "redux";
import Login from "./Login";
import Main from "./Main";

const reducers = combineReducers({
    SignUpValidationData: SignUpValidation,
    ClubSearch,
    Login,
    Main,
});

export default reducers;
