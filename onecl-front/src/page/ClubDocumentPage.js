import React from 'react';
import ClubDocument from '../components/ClubDetail/ClubDocument';

const ClubDocumentPage = ({history, match}) => {
    const {clubID, id} = match.params;
    return(
        <ClubDocument clubID={clubID} docID={id} />
    )
};

export default ClubDocumentPage;
