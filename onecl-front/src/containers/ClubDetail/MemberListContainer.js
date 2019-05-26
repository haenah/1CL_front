import {connect} from 'react-redux';
import MemberList from '../../components/ClubDetail/Body/MemberList';
import * as actions from '../../actions/ClubDetail/index';

const mapStateToProps = (state) => {
    return {
        memberList : state.ClubDetail.memberList,
    }
};

export default connect(mapStateToProps, null)(MemberList)
