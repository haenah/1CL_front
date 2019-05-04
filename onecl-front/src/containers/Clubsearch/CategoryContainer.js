import {connect} from 'react-redux';
import Category from '../../components/Clubsearch/Category';
import {getCategoryListRequest, getClubListRequest, getDeptListRequest} from "../../actions/Clubsearch";

const mapStateToProps = (state) => {
    return {
        deptList: state.ClubSearch.deptList,
        categoryList: state.ClubSearch.categoryList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCategory : () => {
            dispatch(getCategoryListRequest())
        },
        onGetDepartment : () => {
            dispatch(getDeptListRequest())
        },
        onGetClub : (dept, category) => {
            dispatch(getClubListRequest(dept, category))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
