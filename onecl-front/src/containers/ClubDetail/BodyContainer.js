import {connect} from 'react-redux';
import Body from '../../components/ClubDetail/Body';
import * as actions from '../../actions/ClubDetail/index';

const mapDispatchToProps = (dispatch) => {
    return {
        getMemberList : (id) => {
            dispatch(actions.getMemberListRequest(id))
        },
        getDocumentList : (id) => {
            dispatch(actions.getDocumentListRequest(id))
        },
        getInfoPost : (id) => {
            dispatch(actions.getInfoPostRequest(id))
        },
        getAuthLevel : (id) => {
            dispatch(actions.getAuthLevelRequest(id))
        },
        submitDocument : (docTitle, docContent) => {
            dispatch(actions.submitDocumentRequest(docTitle, docContent))
        },
    }
};

const mapStateToProps = (state) => {
    return {
        infoPost : state.ClubDetail.infoPost,
        memberList : state.ClubDetail.memberList,
        documentList : state.ClubDetail.documentList,
        componentStatus : state.ClubDetail.componentStatus,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Body)
