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
        submitDocument : (docTitle, docContent, type, clubID) => {
            dispatch(actions.submitDocumentRequest(docTitle, docContent, type, clubID))
        },
        searchDocument : (category, clubID) => {
            dispatch(actions.searchDocumentRequest(category, clubID))
        },
        authChangeModalVisualize : (clubID, joinID, username) => {
            dispatch(actions.authChangeModalVisualize(clubID, joinID, username))
        },
        getDocTypeList : (id) => {
            dispatch(actions.getDocTypeListRequest(id))
        },
        startPost : () => {
            dispatch(actions.startPost())
        },
    }
};

const mapStateToProps = (state, props) => {
    return {
        infoPost : state.ClubDetail.infoPost,
        memberList : state.ClubDetail.memberList,
        documentList : state.ClubDetail.documentList,
        componentStatus : state.ClubDetail.componentStatus,
        docTypeList: state.ClubDetail.docTypeList,
        history : props.history,
        clubID : props.id,
        post_complete : state.ClubDetail.post_complete,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Body)
