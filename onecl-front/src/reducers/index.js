import SignUpValidation from './SignUpValidation';
import ClubSearch from './ClubSearch';
import {combineReducers} from "redux";

const reducers = combineReducers({
    SignUpValidationData: SignUpValidation,
    ClubSearch: ClubSearch,
});

export default reducers;
