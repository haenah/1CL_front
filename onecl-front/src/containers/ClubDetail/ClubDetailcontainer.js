import {connect} from 'react-redux';
import ClubInfo from '../../components/ClubDetail/Body/ClubInfo';
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
        }
    }
};

const mapStateToProps = (state) => {
    return {
        infoPost : state.ClubDetail.infoPost,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ClubInfo)
