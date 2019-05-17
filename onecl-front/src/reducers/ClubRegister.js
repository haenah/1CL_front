import * as types from '../actions/ClubRegister/ActionTypes'

const initialState = {
    registerSuccess : false
};

const ClubRegister = (state=initialState, action) => {
    switch (action.type) {
        case types.CLUB_REGISTER_SUCCESS:
            return {
                ...state,
                registerSuccess: true,
            };
        default:
            return state;
    }
};

export default ClubRegister;
