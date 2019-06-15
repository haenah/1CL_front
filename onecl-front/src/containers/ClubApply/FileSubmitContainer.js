import React from 'react'
import FileSubmit from '../../components/ClubApply/FileSubmit'
import * as actions from '../../actions/ClubApply/index'
import * as detailActions from '../../actions/ClubDetail/index'
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    return{
        applyMessage : state.ClubApply.applyMessage,
        history : props.history,
        authLevel : state.ClubDetail.authLevel,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getApplyMessage : (clubID) => {
            dispatch(actions.getApplyMessageRequest(clubID))
        },
        getAuthLevel : (clubID) => {
            dispatch(detailActions.getAuthLevelRequest(clubID))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileSubmit)
