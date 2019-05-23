import {connect} from 'react-redux';
import ClubRegister from '../../components/ClubRegister';
import {getCategoryListRequest, getDeptListRequest} from "../../actions/Common";
import {clubRegisterRequest, setRegisterFlag} from '../../actions/ClubRegister';

const mapStateToProps = (state, props) => {
    return {
        deptList: state.ClubSearch.deptList,
        categoryList: state.ClubSearch.categoryList,
        registerSuccess: state.ClubRegister.registerSuccess,
        history: props.history,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCategory : () => {
            dispatch(getCategoryListRequest())
        },
        onGetDepartment : () => {
            dispatch(getDeptListRequest())
        },
        onClubRegister : (clubName, department, category) => {
            dispatch(clubRegisterRequest(clubName, department, category))
        },
        setFlag : (bool) => {
            dispatch(setRegisterFlag(bool))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubRegister)
