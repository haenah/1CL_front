import React from 'react';
import FixClubPost from '../components/FixClubPost/FixClubPost';

const FixClubPostPage = ({history, match}) => {
    const {id} = match.params;

    return(
        <div>
            <FixClubPost id={id} history={history} />
        </div>
    )
};

export default FixClubPostPage;
