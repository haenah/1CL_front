import React from 'react';
import AddClubDocumentCategory from '../../components/AddClubDocumentCategory/AddClubDocumentCategory';
import * as actions from '../../actions/AddClubDocumentCategory/index';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
  return{
    doc_type_list: state.AddClubDocumentCategory.doc_type_list,
    doc_type: state.AddClubDocumentCategory.doc_type,
    history: props.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryList: (clubID) => {
      dispatch(actions.fetchCategoryListRequest(clubID))
    },
    removeDocCategory: (categoryID, clubID) => {
      dispatch(actions.removeDocumentCategoryRequest(categoryID, clubID));
    },
    addDocCategory: (name,clubID) => {
      dispatch(actions.addDocumentCategoryRequest(name, clubID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddClubDocumentCategory)
