import {connect} from 'react-redux';
import FixClubPost from '../../components/FixClubPost/FixClubPost';
import * as actions from "../../actions/ClubDetail/index";
import * as fixActions from '../../actions/FixClubPost/index'
const mapStateToProps = (state) => {
    return {
        infoPost: state.ClubDetail.infoPost
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInfoPost : (id) => {
            dispatch(actions.getInfoPostRequest(id))
        },
        fixIntroPost : (id, content) => {
            dispatch(fixActions.putIntroRequest(id, content));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FixClubPost)
