import React from 'react';
import CategoryContainer from '../containers/Clubsearch/CategoryContainer';
import ClubListContainer from '../containers/Clubsearch/ClubListContainer';

const ClubsearchPage = () => {
    return(
        <div style={{'height': '800px', 'background': 'linear-gradient(-135deg, #c0dcf3, white)'}}>
            <CategoryContainer/>
            <ClubListContainer/>
        </div>
    );
};

export default ClubsearchPage;
