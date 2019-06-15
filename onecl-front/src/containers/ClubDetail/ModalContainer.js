import {connect} from 'react-redux';
import Modal from '../../components/ClubDetail/Modal';
import * as actions from '../../actions/ClubDetail/index';

const mapDispatchToProps = (dispatch) => {
    return {
        removeModal : () => {
            dispatch(actions.removeModal())
        },
        changeAuthLevel : (joinID, authLevel) => {
            dispatch(actions.changeAuthLevelRequest(joinID,authLevel))
        },
        updateMemberList : (clubID) => {
            dispatch(actions.getMemberListRequest(clubID))
        },
    }
};

const mapStateToProps = (state) => {
    return {
        clubID : state.ClubDetail.authChange_clubID,
        username : state.ClubDetail.authChange_username,
        joinID : state.ClubDetail.authChange_joinID,
        visible : state.ClubDetail.visualize,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
