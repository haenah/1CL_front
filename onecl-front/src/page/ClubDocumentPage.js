import React from 'react';

const ClubDocumentPage = ({history, match}) => {
    const {clubID, id} = match.params;

    return(
        <div>
            club id is {clubID}, doc id is {id}
        </div>
    )
};

export default ClubDocumentPage;
