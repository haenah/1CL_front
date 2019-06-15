import React from 'react';
import CategoryContainer from '../containers/Clubsearch/CategoryContainer';
import ClubListContainer from '../containers/Clubsearch/ClubListContainer';

const ClubsearchPage = ({history}) => {
    return(
        <div>
            <CategoryContainer/>
            <ClubListContainer history={history} />
        </div>
    );
};

export default ClubsearchPage;
