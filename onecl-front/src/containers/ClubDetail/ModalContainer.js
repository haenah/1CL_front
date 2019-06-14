import {connect} from 'react-redux';
import Modal from '../../components/ClubDetail/Modal';
import * as actions from '../../actions/ClubDetail/index';

const mapDispatchToProps = (dispatch) => {
    return {
        removeModal : () => {
            dispatch(actions.removeModal())
        },
        changeAuthLevel : (clubID, memberID, authLevel) => {
            dispatch(actions.changeAuthLevelRequest(clubID,memberID,authLevel))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        clubID : state.ClubDetail.authChange_clubID,
        memberID : state.ClubDetail.authChange_memberID,
        visible : state.ClubDetail.visualize,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
