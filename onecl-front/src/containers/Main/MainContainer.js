import Main from '../../components/Main/Main';
import {connect} from 'react-redux';
import {fetchClubListRequest} from "../../actions/Main";

const mapStateToProps = (state, props) => {
  return {
    clubs: state.Main.clubList,
    login: state.Login.user,
    history: props.history,
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
