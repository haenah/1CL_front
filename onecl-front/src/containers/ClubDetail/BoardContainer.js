import {connect} from 'react-redux';
import Board from '../../components/ClubDetail/Body/Board';
import * as actions from '../../actions/ClubDetail/index';

const mapStateToProps = (state) => {
    return {
        documentList : state.ClubDetail.documentList,
    }
};
export default connect(mapStateToProps, null)(Board)
