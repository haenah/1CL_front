import MyPage from '../../components/MyPage/MyPage';
import {connect} from 'react-redux';
import * as actions from '../../actions/MyPage/index';
// import {fetchJoinRequest} from '../../actions/MyPage/index';

const mapStateToProps = (state, props) => ({
    joinList: {...state.MyPage.joinList},
    history: props.history,
});

const mapDispatchToProps = (dispatch) => ({
    fetchJoin: () => {
        dispatch(actions.fetchJoinRequest())
    },
});

const MyPageContainer = connect(mapStateToProps, mapDispatchToProps)(MyPage);

export default MyPageContainer;
