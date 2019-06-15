import React from 'react';
import CategoryContainer from '../containers/Clubsearch/CategoryContainer';
import ClubListContainer from '../containers/Clubsearch/ClubListContainer';

const ClubsearchPage = () => {
    return(
        <div>
            <CategoryContainer/>
            <ClubListContainer/>
        </div>
    );
};

export default ClubsearchPage;
