import React from 'react'
import AddClubDocumentCategoryContainer from '../containers/AddClubDocumentCategory/AddClubDocumentCategoryContainer';

const AddClubDocumentCategoryPage = ({match, history}) => {
  const {id} = match.params;

  return(
    <div>
      <AddClubDocumentCategoryContainer
        clubID={id}
        history={history}
      />
    </div>
  )
};

export default AddClubDocumentCategoryPage;
