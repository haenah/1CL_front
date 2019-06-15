import {connect} from 'react-redux';
import Footer from '../../components/ClubDetail/Footer';
import * as actions from '../../actions/ClubDetail/index';

const mapStateToProps = (state, props) => {
    return {
        id : props.id,
        history: props.history,
        authLevel : state.ClubDetail.authLevel,
    }
};

export default connect(mapStateToProps, null)(Footer)
