import ClubDocument from '../../components/ClubDetail/ClubDocument';
import {connect} from 'react-redux';
import {reduxActions} from "../../actions/ClubDetail/index";
import * as actions from '../../actions/ClubDetail/index';

const mapStateToProps = (state, props) => {
  return {
    document: state.ClubDocument.document,
    history: props.history,
    isFetching: state.ClubDocument.isFetching,
    error: state.ClubDocument.errorMessage,
    addCommentSuccess: state.ClubDocument.addCommentSuccess,
    comment: state.ClubDocument.comment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDocument: (docID) => {
      dispatch(reduxActions.getDocumentRequest(docID));
    },
    addComment: (document, content) => {
      dispatch(actions.addCommentRequest(document, content));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ClubDocument);
