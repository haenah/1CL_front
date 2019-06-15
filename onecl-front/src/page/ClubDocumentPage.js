import React from 'react';
import ClubDocumentContainer from '../containers/ClubDetail/ClubDocumentContainer';

const ClubDocumentPage = ({history, match}) => {
    const {clubID, id} = match.params;
    return(
        <ClubDocumentContainer clubID={clubID} docID={id} history={history} />
    )
};

export default ClubDocumentPage;
