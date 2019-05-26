import SignUpValidation from './SignUpValidation';
import ClubSearch from './ClubSearch';
import {combineReducers} from "redux";
import Login from "./Login";
import Main from "./Main";
import ClubRegister from './ClubRegister';
import ClubDetail from './ClubDetail';

const reducers = combineReducers({
    SignUpValidationData: SignUpValidation,
    ClubSearch,
    Login,
    Main,
    ClubRegister,
    ClubDetail,
});

export default reducers;
