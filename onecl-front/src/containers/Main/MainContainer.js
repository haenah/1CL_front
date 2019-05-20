import Main from '../../components/Main/Main';
import {connect} from 'react-redux';
import {getClubListRequest} from "../../actions/Clubsearch";

const mapStateToProps = (state) => {
  return {
    clubs: state.ClubSearch.clubList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClubs: (dept, category) => {
      dispatch(getClubListRequest(dept, category));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);
