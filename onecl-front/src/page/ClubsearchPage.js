import React from 'react';
import CategoryContainer from '../containers/Clubsearch/CategoryContainer';
import ClubListContainer from '../containers/Clubsearch/ClubListContainer';

const ClubsearchPage = () => {
    return(
        <div style={{
            'height' : '100%',
            'width' : '100%',
            'position' : 'fixed',
            'z-index' : '-10',
            'background' : 'linear-gradient(-135deg, #c0dcf3, white)',
        }}>
            <CategoryContainer/>
            <ClubListContainer/>
        </div>
    );
};

export default ClubsearchPage;
