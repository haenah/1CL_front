import {connect} from 'react-redux';
import Header from '../../components/ClubDetail/Header';
import * as actions from '../../actions/ClubDetail/index';

const mapStateToProps = (state, props) => {
    return {
        id : props.id,
    }
};
export default connect(mapStateToProps, null)(Header)
