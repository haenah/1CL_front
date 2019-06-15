import React from 'react';
import FixClubPostContainer from '../containers/FixClubPost/FixClubPostContainer';

const FixClubPostPage = ({history, match}) => {
    const {id} = match.params;

    return(
        <div>
            <FixClubPostContainer id={id} history={history} />
        </div>
    )
};

export default FixClubPostPage;
