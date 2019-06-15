import ClubDocument from '../../components/ClubDetail/ClubDocument';
import {connect} from 'react-redux';
import {getDocumentRequest} from "../../actions/ClubDetail";

const mapStateToProps = (state, props) => {
  return {
    document: state.ClubDocument.document,
    history: props.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDocument: (clubID, docID) => {
      dispatch(getDocumentRequest(clubID, docID));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ClubDocument);
