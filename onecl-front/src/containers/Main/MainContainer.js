import Main from '../../components/Main/Main';
import {connect} from 'react-redux';
import {fetchClubListRequest} from "../../actions/Main";

const mapStateToProps = (state) => {
  return {
    clubs: state.Main.clubList,
    login: state.Login.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClubs: () => {
      dispatch(fetchClubListRequest());
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);
