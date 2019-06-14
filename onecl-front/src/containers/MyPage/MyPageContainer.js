import MyPage from '../../components/MyPage/MyPage';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => ({
    user: state.Login.user,
    history: props.history,
});

const mapDispatchToProps = (dispatch) => ({

});

const MyPageContainer = connect(mapStateToProps, mapDispatchToProps)(MyPage);

export default MyPageContainer;
