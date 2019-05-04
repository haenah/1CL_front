import SignUpValidation from './SignUpValidation';
import ClubSearch from './ClubSearch';
import {combineReducers} from "redux";
import Login from "./Login";

const reducers = combineReducers({
    SignUpValidationData: SignUpValidation,
    Login: Login,
    ClubSearch: ClubSearch,
});

export default reducers;
