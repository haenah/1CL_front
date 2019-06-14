import React from 'react'
import FileSubmit from '../../components/ClubApply/FileSubmit'
import * as actions from '../../actions/ClubApply/index'
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    return{
        applyMessage : state.ClubApply.applyMessage,
        history : props.history,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getApplyMessage : (clubID) => {
            dispatch(actions.getApplyMessageRequest(clubID))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileSubmit)
