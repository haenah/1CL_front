import SignUpValidation from './SignUpValidation';
import ClubSearch from './ClubSearch';
import {combineReducers} from "redux";
import Login from "./Login";
import ClubRegister from './ClubRegister';

const reducers = combineReducers({
    SignUpValidationData: SignUpValidation,
    ClubSearch,
    Login,
    ClubRegister,
});

export default reducers;
