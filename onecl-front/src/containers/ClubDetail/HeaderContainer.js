import {connect} from 'react-redux';
import Header from '../../components/ClubDetail/Header';
import * as actions from '../../actions/ClubDetail/index';

const mapDispatchToProps = (dispatch) => {
    return {
        clickInfoPostButton : () => {
            dispatch(actions.changeStatus(0))
        },
        clickDocListButton : () => {
            dispatch(actions.changeStatus(1))
        },
        clickMemberListButton : () => {
            dispatch(actions.changeStatus(2))
        },
    }
};

const mapStateToProps = (state, props) => {
    return {
        id : props.id,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
