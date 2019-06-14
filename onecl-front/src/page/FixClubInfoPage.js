import React from 'react';
import FixClubInfo from '../components/FixClubInfo/FixClubInfo'

const FixClubInfoPage = ({history, match}) => {
    const {id} = match.params;

    return(
        <div>
            <FixClubInfo
                id={id}
                history={history}
            />
        </div>
    )
};

export default FixClubInfoPage;
